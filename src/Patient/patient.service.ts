import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,
  ) {}

  create(patientData: Partial<Patient>) {
    const patient = this.patientRepo.create(patientData);
    return this.patientRepo.save(patient);
  }

  findAll() {
    return this.patientRepo.find({
      order: { created_at: 'DESC' }
    });
  }
}
