import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterAuthGuard extends AuthGuard('twitter') {
  handleRequest(err, user, info, context) {
    return user;
  }
}
