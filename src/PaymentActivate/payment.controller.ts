// src/payment/payment.controller.ts
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  addPayment(@Body() paymentData: Partial<Payment>) {
    return this.paymentService.create(paymentData);
  }

  @Get()
  getAllPayments() {
    return this.paymentService.findAll();
  }

  @Delete(':id')
  deletePayment(@Param('id') id: string) {
    return this.paymentService.delete(Number(id));
  }
}
