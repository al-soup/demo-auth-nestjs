import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // customize the strategy by passing an options obj (http://www.passportjs.org/docs/configure/)
    super();
  }

  /**
   * Configure the. `verify callback` for a passport strategy: Does user exist and are the resp. credentials valid?
   * Return the user if validation is successful, null if not
   */
  async validate(username: string, password: string): Promise<any> {
    // this method signature is expedted for the local-strategy
    const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
