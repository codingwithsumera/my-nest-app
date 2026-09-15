import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async createProduct(): Promise<Product> {
    const product = new this.productModel({
      title: 'Gaming Laptop',
      tags: [
        { name: 'electronics' },
        { name: 'gaming' },
        { name: 'Imported Product' },
        { name: 'Laptop' },
      ],
    });

    return product.save();
  }
  async getAllPrducts(): Promise<Product[]> {
    return this.productModel.find();
  }
}
