import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(user: CreateUserDTO): Promise<User> {
        let hashedPassword: string = await bcrypt.hash(user.password, 10);
        let newUser = new User();
        newUser.name = user.name;
        newUser.password = hashedPassword;
        newUser.save();

        return newUser;
    }

    async findUserByID(id: number): Promise<User> {
        return this.userRepository.findOne({ id });
    }

    async findByName(name: string): Promise<User> {
        return this.userRepository.findOne({ where: { name: name } })
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}
