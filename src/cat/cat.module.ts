import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat } from './cat.entity';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats')
  }
}