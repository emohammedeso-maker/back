// src/payment/entities/payment.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  doctorName: string;

  @Column()
  operationName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalCost: number;

  @Column({ type: 'date', nullable: true })
bookingDate: Date | null;

}
