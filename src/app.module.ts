import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductService } from './product/product.service.js';
import { ProductController } from './product/product.controller.js';
import { EmployeeModule } from './employee/employee.module.js';
import { CategoryModule } from './category/category.module.js';
import { StudentModule } from './student/student.module.js';
import { CustomerModule } from './customer/customer.module.js';
import { MynameController } from './myname/myname.controller.js';
import { UserRolesController } from './user-roles/user-roles.controller.js';
import { ExceptionController } from './exception/exception.controller.js';
import { LoggerMiddleware } from './middleware/logger/logger.middleware.js';
import { DatabaseService } from './database/database.service.js';
import { DatabaseController } from './database/database.controller.js';
import { EnvService } from './env/env.service.js';
import { EnvController } from './env/env.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'my-nest-app',
    }),
    EmployeeModule,
    CategoryModule,
    StudentModule,
    CustomerModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [
    AppController,
    UserRolesController,
    ProductController,
    MynameController,
    UserRolesController,
    ExceptionController,
    DatabaseController,
    EnvController,
  ],
  providers: [AppService, ProductService, DatabaseService, EnvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
