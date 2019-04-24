import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { plainToClass } from 'class-transformer';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':user_id')
    async getUser(@Param('user_id') user_id: number): Promise<User> {
        return this.userService.findUserByID(user_id);
    }

    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.create(createUserDTO);
    }

    @Get()
    async findAll(): Promise<User[]> {
        let users = await this.userService.findAll();

        return users.map(user => plainToClass(User, user));
    }
}
