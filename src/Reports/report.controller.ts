import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './report.entity';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  create(@Body() reportData: Partial<Report>) {
    return this.reportService.create(reportData);
  }

  @Get()
  findAll(): Promise<Report[]> {
    return this.reportService.findAll();
  }
}
