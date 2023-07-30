import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    @Body() completeBody: { title: string; description: string; price: number },
  ): any {
    const genId = this.productsService.createProduct(
      completeBody.title,
      completeBody.description,
      completeBody.price,
    );
    return { id: genId };
  }
  @Get()
  getProducts(): any {
    const products = this.productsService.getproducts();
    return products;
  }
  @Get(':id')
  getproduct(@Param('id') id: string): any {
    return this.productsService.getproduct(id);
  }
}
