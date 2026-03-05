import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { Clinic } from './clinic.entity';

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Post()
  create(@Body() clinic: Clinic) {
    return this.clinicsService.create(clinic);
  }

  @Get()
  findAll() {
    return this.clinicsService.findAll();
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.clinicsService.login(body.email, body.password);
  }
}
