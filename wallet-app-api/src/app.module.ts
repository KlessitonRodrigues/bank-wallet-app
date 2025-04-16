import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: '/user/*', method: RequestMethod.ALL });
  }
}
