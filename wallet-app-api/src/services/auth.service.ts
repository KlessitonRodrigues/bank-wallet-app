import { Injectable } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { env } from 'src/config/env';
import { UserModel } from 'src/models/user.model';
import { toJSObject } from 'src/utils/mongo/convertObj';
import { hoursToMs } from 'src/utils/time';

@Injectable()
export class AuthService {
  private users = mongoose.model('users', UserModel);

  async signIn(email: string, password: string, expiresIn: number) {
    if (!(email || password)) throw new Error('invalid credentials');
    const user = await this.users.findOne({ where: { email } });
    if (!user) throw new Error('invalid credentials');
    const isValidPassord = bcrypt.compareSync(password, user.password);
    if (!isValidPassord) throw new Error('invalid credentials');
    return jwt.sign({ id: user.id }, env.TOKEN_KEY, { expiresIn });
  }

  async signUp(user) {
    const { email, password } = user;
    if (!(email || password)) throw new Error('invalid credentials');
    const userExists = await this.users.findOne({ where: { email } });
    if (userExists) throw new Error('user already exists');
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await this.users.create({
      ...user,
      email,
      password: hashedPassword,
    });
    return toJSObject(newUser);
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

  async requestCode(email: string) {
    const user = await this.users.findOne({ where: { email } });
    if (!user) throw new Error('user not found');
    const code = Math.random().toString().substring(2, 6);
    user.verifyCode = code;
    user.verifyCodeTime = String(Date.now() + hoursToMs(1));
    await user.save();
    return code;
  }

  async verifyCode(email: string, userCode: string) {
    const user = await this.users.findOne({ where: { email } });
    if (!user) throw new Error('user not found');
    if (!user.verifyCode) throw new Error('Code not requested');
    if (user.verifyCode !== userCode) throw new Error('Invalid verification code');
    if (Number(user.verifyCodeTime) < Date.now()) throw new Error('Code was expired');

    const newToken = jwt.sign({ id: user.id }, env.TOKEN_KEY, {
      expiresIn: hoursToMs(12),
    });

    return { email: user.email, token: newToken };
  }
}
