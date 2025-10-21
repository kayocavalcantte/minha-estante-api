
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './create.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'teste@gmail.com',
      password: '123456',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@gmail.com',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(dto.password);

    // Gera ID incremental baseado no último user cadastrado
    const nextId = this.users.length > 0
      ? this.users[this.users.length - 1].userId + 1
      : 1;

    const newUser: User = {
      userId: nextId,
      username: dto.username,
      email: dto.email,
      password: hashedPassword,
    };

    this.users.push(newUser);
    return newUser;
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
}
