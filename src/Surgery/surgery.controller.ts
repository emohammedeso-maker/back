import { Controller, Get, Post, Body } from '@nestjs/common';
import { SurgeryService } from './surgery.service';
import { Surgery } from './surgery.entity';

@Controller('surgery')
export class SurgeryController {
    constructor(private readonly surgeryService: SurgeryService) {}

    @Post()
    async create(@Body() newSurgery: Surgery): Promise<Surgery> {
        return this.surgeryService.create(newSurgery);
    }

    @Get()
    async findAll(): Promise<Surgery[]> {
        return this.surgeryService.findAll();
    }
}
