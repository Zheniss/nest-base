import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { CatModule } from './cat/cat.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/all-exception.filter';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PhotoModule,
    CatModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
    AppService
  ],
})
export class AppModule {}
