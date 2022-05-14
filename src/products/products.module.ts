import { Module } from "@nestjs/common";
import { BrandsService } from "./services/brands.service";
import { BrandsController } from "./controllers/brands.controller";
import { ProductsService } from "./services/products.service";
import { CategoriesService } from "./services/categories.service";
import { ProductsController } from "./controllers/products.controller";
import { CategoriesController } from "./controllers/categories.controller";

@Module({
  providers: [BrandsService, ProductsService, CategoriesService],
  controllers: [BrandsController, ProductsController, CategoriesController],
  exports: [ProductsService],
})
export class ProductsModule {}
