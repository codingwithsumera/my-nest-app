import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: Date.now(),
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
