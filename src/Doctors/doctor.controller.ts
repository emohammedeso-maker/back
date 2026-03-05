// src/doctor/doctor.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from '../Doctors/entities/doctor.entity';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  create(@Body() doctorData: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.create(doctorData);
  }

  @Get()
  findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }
}
