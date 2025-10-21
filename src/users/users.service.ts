import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
    ) {}

  async findOne(email: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException(`User com o ID ${email} não encontrado.`);
    }

    return user
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(dto.password);

    const newUser = this.usersRepository.create({
      username: dto.username,
      email: dto.email,
      password: hashedPassword,
    });

    return this.usersRepository.save(newUser);
  
  }

  
  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
}
