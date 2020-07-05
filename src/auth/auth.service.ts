import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

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

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    let passwordMatch: boolean;

    if (user?.passwordHash) {
      // check if users passwords matches the saved hash
      passwordMatch = await new Promise((resolve, reject) => {
        bcrypt.compare(password, user.passwordHash, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      });
    }
    if (passwordMatch) {
      // Return every user property but the hash
      const { passwordHash, ...result } = user;
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
