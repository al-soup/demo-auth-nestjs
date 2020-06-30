import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


/**
 * Retreives the user and verifies the passport
 *
 * @class AuthService
 */
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      // Take everything from the user but the password
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    // eslint-disable-next-line @typescript-eslint/camelcase
    return { access_token: this.jwtService.sign(payload) };
  }
}
