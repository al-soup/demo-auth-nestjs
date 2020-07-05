import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtZStrategy } from './jwtz.strategy';
require('dotenv').config();

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwtz' })],
  providers: [JwtZStrategy],
  exports: [PassportModule],
})
export class AuthzModule {}
