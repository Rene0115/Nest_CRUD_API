import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ProductModule, MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
