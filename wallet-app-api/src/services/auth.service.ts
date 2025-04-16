import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { env } from 'src/config/env';
import { AccountModel } from 'src/models/account.model';
import { UserModel } from 'src/models/user.model';
import { toJSObject } from 'src/utils/mongo/convertObj';

@Injectable()
export class AuthService {
  private users = mongoose.model('users', UserModel);
  private accounts = mongoose.model('accounts', AccountModel);

  async signIn(email: string, password: string, expiresIn: number) {
    if (!(email || password)) throw new Error('invalid credentials');
    const user = await this.users.findOne({ email });
    if (!user) throw new Error('invalid credentials');
    const account = await this.accounts.findOne({ userId: user.id });
    if (!account) throw new Error('no account found');

    const isValidPassord = bcrypt.compareSync(password, account.password);
    if (!isValidPassord) throw new Error('invalid credentials');
    return jwt.sign({ id: user.id }, env.TOKEN_KEY, { expiresIn });
  }

  async signUp(user) {
    const { email, password } = user;
    if (!(email || password)) throw new Error('invalid credentials');
    const userExists = await this.users.findOne({ email });
    if (userExists) throw new Error('user already exists');
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await this.users.create({
      firstName: user.firstName,
      surName: user.surName,
      cpf: user.cpf,
      cnpj: user.cnpj,
      email,
    });

    const newAccount = await this.accounts.create({
      userId: newUser.id,
      password: hashedPassword,
      amount: 0,
    });

    return { user: toJSObject(newUser), account: toJSObject(newAccount) };
  }

  async decodeToken(token: string) {
    const decodedToken = jwt.verify(token, env.TOKEN_KEY) as any;
    if (!decodedToken?.id) throw new Error('Invalid token id');
    return decodedToken;
  }

  async refreshToken(token: string) {
    const decodedToekn = jwt.verify(token, env.TOKEN_KEY) as any;
    const { id, exp } = decodedToekn;
    if (!id) throw new Error('Invalid token');
    const newToken = jwt.sign({ id }, env.TOKEN_KEY, { expiresIn: exp });
    return { userId: id, token: newToken };
  }
}
