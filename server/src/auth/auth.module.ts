import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [UserService, JwtModule.register({
    secret: process.env.SECRET_ADMIN,
    signOptions: {expiresIn: process.env.ACCESS_LIVE}
  })],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
