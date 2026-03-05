import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Surgery } from './surgery.entity';

@Injectable()
export class SurgeryService {
    constructor(
        @InjectRepository(Surgery)
        private surgeryRepository: Repository<Surgery>,
    ) {}

    create(surgery: Surgery): Promise<Surgery> {
        return this.surgeryRepository.save(surgery);
    }

    findAll(): Promise<Surgery[]> {
        return this.surgeryRepository.find();
    }
}
