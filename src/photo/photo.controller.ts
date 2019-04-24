import { Controller, Get } from '@nestjs/common';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { Observable, of } from 'rxjs';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Get()
    findAll(): Observable<Promise<Photo[]>> {
        let photos = this.photoService.findAll()

        return of(photos)
    }
}
