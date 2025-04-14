import { Body, Controller, Headers, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { hoursToMs } from 'src/utils/time';

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/sign-in')
  async signIn(@Body() body, @Res() res: Response) {
    try {
      const { email, password, rememberMe } = body;
      const expireIn = rememberMe ? hoursToMs(48) : hoursToMs(1);
      const token = await this.authService.signIn(email, password, expireIn);
      return res.status(HttpStatus.OK).json({ token });
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }

  @Post('/sign-up')
  async signUp(@Body() body, @Res() res: Response) {
    try {
      const user = await this.authService.signUp(body);
      return res.status(HttpStatus.CREATED).json(user);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }

  @Post('/refresh-token')
  async refreshToken(@Headers() headers, @Res() res: Response) {
    try {
      const token = headers['Authorization'];
      if (!token) throw new Error('missing token');

      const newToken = await this.authService.refreshToken(token);
      const user = await this.userService.getUserInfo(newToken.userId);
      const userData = {
        user,
        token: newToken.token,
      };

      return res.json(userData);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }
}
