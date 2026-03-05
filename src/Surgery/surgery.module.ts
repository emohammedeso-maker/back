import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Surgery } from './surgery.entity';
import { SurgeryService } from './surgery.service';
import { SurgeryController } from './surgery.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Surgery])],
  providers: [SurgeryService],
  controllers: [SurgeryController],
})
export class SurgeryModule {}
