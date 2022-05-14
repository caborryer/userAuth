import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/costumers.service';
import { CustomerController } from './controllers/costumers.controller';
import { UsersController } from './controllers/users.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [UsersService, CustomersService],
  controllers: [CustomerController, UsersController]
})
export class UsersModule {}
