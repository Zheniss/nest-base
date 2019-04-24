import { Controller, Post, Body, ForbiddenException, UnauthorizedException, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import ICredentials from './interfaces/auth.interface';
import IToken from './interfaces/token.interface';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async login(@Body() body: User): Promise<IToken> {
        const user = await this.userService.findByName(body.name);
        if (!user) {
            throw new ForbiddenException('Not User');
        }

        const isOK: boolean = await bcrypt.compare(body.password, user.password);
        if (!isOK) {
            throw new UnauthorizedException('Not ok');
        }

        let token: string = jwt.sign({ sub: user.id }, 'AAAAAA')

        return {
            token
        }
    }
}
