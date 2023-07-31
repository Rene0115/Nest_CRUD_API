import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async createProduct(data: Product) {
    const newProduct = await this.productModel.create(data);
    console.log(newProduct);
    return 'done';
  }

  async getproducts() {
    const products = await this.productModel.find();
    return products;
  }
}
