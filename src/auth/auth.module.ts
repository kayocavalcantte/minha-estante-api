
// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthController } from './auth.controller';
// import { jwtConstants } from './constants';

// @Module({
//   imports: [
//     UsersModule,
//     JwtModule.register({
//       global: true,
//       secret: jwtConstants.secret,
//       signOptions: { expiresIn: '600s' },
//     }),
//   ],
//   providers: [AuthService],
//   controllers: [AuthController],
//   exports: [AuthService],
// })
// export class AuthModule {}




import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
