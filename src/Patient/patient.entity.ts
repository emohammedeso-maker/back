import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient_name: string;

  @Column()
  age: number;

  @Column('date')
  diagnosis_date: string;

  @Column()
  diagnosis: string;

  @CreateDateColumn()
  created_at: Date;
}
