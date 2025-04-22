import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('AuthMiddleware', req.path);

      const token = await this.authService.decodeToken(req.headers.authorization);
      if (!token.id) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid Token' });
        return;
      }

      req.headers.userId = token.id;
      next();
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }
}
