import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductsDto,
} from "../dtos/products.dtos";
import { ProductsService } from "../services/products.service";
import { ApiTags } from "@nestjs/swagger";
import { MongoIdPipe } from "./../../common/mongo-id.pipe";

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
  }

  @Get("filter")
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(":productId")
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param("productId", MongoIdPipe) productId: string) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.productsService.remove(id);
  }
}
