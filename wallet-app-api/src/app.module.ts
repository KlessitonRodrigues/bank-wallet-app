import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AppModule {}
