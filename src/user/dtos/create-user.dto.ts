import { Exclude } from 'class-transformer';
import { Cat } from 'dist/cat/cat.entity';

export class CreateUserDTO {
    readonly name: string

    @Exclude()
    readonly password: string

    readonly cats?: Cat[]
}