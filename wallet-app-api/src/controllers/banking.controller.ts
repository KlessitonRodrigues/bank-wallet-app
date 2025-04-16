import { Controller, Headers, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from 'src/services/auth.service';

@Controller('/banking')
export class UserController {
  constructor(private authService: AuthService) {}

  @Post('/pix/transfer')
  async transferByPIX(@Headers() header, @Res() res: Response) {
    try {
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }

  @Post('/pix/revert:id')
  async revertTransferByPIX(@Headers() header, @Res() res: Response) {
    try {
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }
}
