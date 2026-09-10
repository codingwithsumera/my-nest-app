import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  addCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.addCustomer(createCustomerDto);
  }
}
