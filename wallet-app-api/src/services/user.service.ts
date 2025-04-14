import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

import { UserModel } from 'src/models/user.model';
import { toJSObject } from 'src/utils/mongo/convertObj';

@Injectable()
export class UserService {
  private users = mongoose.model('users', UserModel);

  async getUserInfo(userId: string) {
    const user = await this.users.findOne({ id: userId });
    if (!user) throw new Error('User not found');
    return toJSObject(user);
  }
}
