import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clinic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clinicName: string;

  @Column()
  doctorName: string;

  @Column()
  date: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
