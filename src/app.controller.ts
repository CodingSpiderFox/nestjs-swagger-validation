import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MyDto } from './my-dto.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  handlePost(@Body() myDto: MyDto): void {}
}
