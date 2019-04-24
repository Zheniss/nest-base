import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User extends BaseEntity {
    @ApiModelProperty({
        description: 'Id of user',
        example: '1',
        type: Number,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty({
        description: 'Name for user',
        example: 'Zhenis',
        type: String,
    })
    @Column()
    name: string;

    @ApiModelProperty({
        description: 'Password for user',
        example: 'randomPassWord',
        type: String,
    })
    @Exclude()
    @Column()
    password: string;
}