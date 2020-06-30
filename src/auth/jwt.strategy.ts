import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor() {
    super({
      // Used model jwt strategy here is "stateless JWT". Issued tokens are valid till expiration.
      // Tokens would have to activly be revoked looked up in the validate() method.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // TODO take a look at token expiration and refreshing
      secretOrKey: jwtConstants.secret, // Same secret is used as when we sign the jwt
      // more options: https://github.com/mikenicholson/passport-jwt#configure-strategy
    });
  }
  /**
   * Passport first verifies the JWT's signature and decodes the JSON.
   * It then invokes our validate() method passing the decoded JSON as
   * its single parameter. Based on the way JWT signing works, we're
   * guaranteed that we're receiving a valid token that we have previously
   * signed and issued to a valid user
   */
  async validate(payload: any) {
    // Could insert more business logic (e.g via hooks) here
    return { userId: payload.sub, username: payload.username };
  }
}
