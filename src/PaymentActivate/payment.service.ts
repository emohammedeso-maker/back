// src/payment/payment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  create(paymentData: Partial<Payment>) {
    const newPayment = this.paymentRepository.create(paymentData);
    return this.paymentRepository.save(newPayment);
  }

  findAll() {
    return this.paymentRepository.find();
  }

  async delete(id: number) {
    const result = await this.paymentRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Payment with ID ${id} not found.`);
    }
    return { message: `Payment with ID ${id} deleted successfully.` };
  }
  
}
