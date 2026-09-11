import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles/roles.guard.js';
import { Roles } from '../guards/roles/roles.decorators.js';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles('Role.Admin')
  getAdminData() {
    return {
      message: 'This data is only accessible to users with the Admin role.',
    };
  }
  @Get('user-data')
  //@UseGuards(RolesGuard)
  //@Roles('Role.User')
  getUserData() {
    return {
      message: 'This data is only accessible to users with the User role.',
    };
  }
}
