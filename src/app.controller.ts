import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(
      'Coba block direct push lagi after update target branch in ruleset',
    );
    return this.appService.getHello();
  }
}
