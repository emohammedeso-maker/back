import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  doctor_name: string;

  @Column()
  clinic_or_operation: string;

  @Column({ type: 'date' })
  bookingDate: string;

  @Column('decimal')
  total_cost: number;
}
