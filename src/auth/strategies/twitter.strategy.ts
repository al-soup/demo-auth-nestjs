import { Strategy } from 'passport-twitter';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://127.0.0.1:3000/api/auth/twitter/callback',
      passReqToCallback: true,
    });
  }

  validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (error: any, user?: any) => void,
  ) {
    const twitterUser = {
      twitterName: profile.username,
      twitterDisplayName: profile.displayName,
    };
    console.log('TWITTER USER\n++++++++++++\n', twitterUser);
    done(null, twitterUser);
  }
}
