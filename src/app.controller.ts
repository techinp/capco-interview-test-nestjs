import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './app.dto';
import { ValidationFilter } from './validation/validate.pipe';

const USER_TEST = {
  email: 'test01@gmail.com',
  password: '1234',
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  @UseFilters(ValidationFilter)
  @HttpCode(200)
  login(@Body() body: LoginDto) {
    if (
      body.password === USER_TEST.password &&
      body.email === USER_TEST.email
    ) {
      return {
        msg: 'Login Success',
        status: 0,
      };
    }

    return { msg: 'Email or Password Incorrect', status: 400 };
  }
}
