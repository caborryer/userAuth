import { Module } from '@nestjs/common';
import config, { configValidationSchema } from './config';
import { environments } from './environments';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users.service';

@Module({
  imports:[ ConfigModule.forRoot({
    envFilePath: environments[process.env.NODE_ENV] || '.env',
    load: [config],
    isGlobal: true,
    validationSchema: configValidationSchema,
  }),
  ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
