import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinic } from './clinic.entity';

@Injectable()
export class ClinicsService {
  constructor(
    @InjectRepository(Clinic)
    private clinicsRepository: Repository<Clinic>,
  ) {}

  create(clinic: Clinic) {
    return this.clinicsRepository.save(clinic);
  }

  findAll() {
    return this.clinicsRepository.find();
  }

   async login(email: string, password: string) {
      const user = await this.clinicsRepository.findOne({ where: { email } });
      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }
    
      if (password !== user.password) {  
        throw new UnauthorizedException('Invalid email or password');
      }
    
      return { email: user.email,doctorName:user.doctorName };
    }
    
}
