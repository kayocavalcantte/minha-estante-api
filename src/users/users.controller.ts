import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso!' })
  async register(@Body() body: CreateUserDto) {
    const user = await this.usersService.createUser(body);

    const { password, ...userWithoutPassword } = user;

    return { message: 'Usuário criado com sucesso!', user: userWithoutPassword};;
  }

}