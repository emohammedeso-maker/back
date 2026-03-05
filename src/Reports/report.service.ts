import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  create(reportData: Partial<Report>) {
    const report = this.reportRepository.create(reportData);
    return this.reportRepository.save(report);
  }

  findAll() {
    return this.reportRepository.find();
  }
}
