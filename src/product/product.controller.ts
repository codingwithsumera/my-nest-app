import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  create() {
    return this.productService.createProduct();
  }

  @Get()
  getAll() {
    return this.productService.getAllPrducts();
  }
}
