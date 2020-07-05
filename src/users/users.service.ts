import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    // Mocking a persistance layer (access from DB, etc.)
    this.users = [
      {
        userId: 1,
        username: 'al@soup.one',
        passwordHash:
          '$2b$10$EGKtbzi252jOeEn93klpi.79b1UO8NZrrJi5fKi0QM4n.6yvLrZ/O',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
