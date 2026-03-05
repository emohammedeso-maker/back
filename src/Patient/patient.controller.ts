import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() patientData: Partial<Patient>) {
    return this.patientService.create(patientData);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }
}
