import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDTO } from './create-cat.dto';
import { UnauthorizedException } from 'src/exceptions/unauthorized.exception';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private readonly CatRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    throw new UnauthorizedException();
    return await this.CatRepository.find();
  }

  async create(catBody: CreateCatDTO): Promise<Cat> {
    let cat: Cat = new Cat()
    cat.name = catBody.name
    cat.lastname = catBody.lastname
    await cat.save()

    return cat
  }

  async findOne(id: number): Promise<Cat> {
    let cat = await this.CatRepository.findOne(id)

    return cat
  }
 }