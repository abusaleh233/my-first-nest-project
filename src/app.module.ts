import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModuls } from './user/users.moduls.js';
import { ProductsModule } from './products/products.module.js';

@Module({
  imports: [UsersModuls, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
