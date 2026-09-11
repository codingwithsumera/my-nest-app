import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  @UseGuards(AuthGuard)
  getProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getProduct(@Param('id') id: string) {
    return this.productService.getproductById(Number(id));
  }
}
