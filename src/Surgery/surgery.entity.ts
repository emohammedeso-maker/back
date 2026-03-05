import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Surgery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    surgeryName: string;

    @Column()
    doctorName: string;

    @Column()
    duration: string;

    @Column('decimal', { precision: 10, scale: 2 })
    cost: number;
}
