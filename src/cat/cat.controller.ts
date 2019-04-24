import { Controller, Get, Param, Post, Body, UseFilters } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';
import { CreateCatDTO } from './create-cat.dto';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Cats')
@Controller('cats')
export class CatController {
    constructor(private readonly catService: CatService) {}

    @Get()
    @UseFilters(HttpExceptionFilter)
    async findAll(): Promise<Cat[]> {
        let cats = await this.catService.findAll();

        return cats
    }

    @Get(':id')
    async findByID(@Param('id') id: number): Promise<Cat> {
        let cat = await this.catService.findOne(id)

        return cat
    }

    @Post()
    async create(@Body() createCatDTO: CreateCatDTO): Promise<Cat> {
        throw new Error('Aaaaaaa')
        let cat: Cat = await this.catService.create(createCatDTO)
        
        return cat
    }
}
