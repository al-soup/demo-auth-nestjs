import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
// Create own named strategy `jwtz`
export class JwtZStrategy extends PassportStrategy(Strategy, 'jwtz') {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // jwksUri: `${authzOptions.authzDomain}.well-known/jwks.json`,
        jwksUri: `${process.env.AUTHZ_DOMAIN}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // audience: authzOptions.authzAudience,
      // issuer: `${authzOptions.authzDomain}`,
      audience: process.env.AUTHZ_AUDIENCE,
      issuer: `${process.env.AUTHZ_DOMAIN}`,
      algorithms: ['RS256'],
    });
  }

  validate(payload: any) {
    return payload;
  }
}
