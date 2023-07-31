import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  async addProduct(
    @Body() completeBody: { title: string; description: string; price: number },
  ) {
    const product = await this.productsService.createProduct(completeBody);
    return product;
  }
  @Get()
  async getProducts() {
    const products = await this.productsService.getproducts();
    return products;
  }
  // @Get(':id')
  // getproduct(@Param('id') id: string): any {
  //   return this.productsService.getproduct(id);
  // }
}
