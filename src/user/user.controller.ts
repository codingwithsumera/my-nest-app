import { Controller, Get } from '@nestjs/common';
//import { get } from 'http';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return 'User data fetched successfully!!';
  }
}
