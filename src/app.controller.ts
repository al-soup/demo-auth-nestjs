import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  UnauthorizedException,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { TwitterAuthGuard } from './auth/guards/twitter.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  // Protect route with local strategy: route handler will only be invoked if the user has been validated
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/isloggedin')
  isLoggedIn(@Request() req) {
    return { isloggedin: true };
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    // user prop is added by passports
    return req.user;
  }

  @UseGuards(AuthGuard('twitter'))
  @Get('auth/twitter')
  twitter() {
    throw new UnauthorizedException();
  }

  @Get('auth/twitter/callback')
  @UseGuards(TwitterAuthGuard)
  async twitterCallback(@Request() req) {
    /**
     * TODO
     * - Create a new user of find existing
     * - Issue a jwt
     * - Redirect to app
     */
    return { twitterUser: req.user };
  }
}
