import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  doctor_name: string;

  @Column()
  clinic_or_operation: string;

  @Column()
  total_cost: number;

  @CreateDateColumn()
  created_at: Date;
}
