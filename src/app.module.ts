import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { DoctorModule } from './Doctors/doctor.module';
import { ClinicsModule } from './Clinics/clinics.module';
import { SurgeryModule } from './Surgery/surgery.module';
import { PaymentModule } from './PaymentActivate/payment.module';
import { ReservationModule } from './reservation/reservation.module';
import { PatientModule } from './Patient/patient.module';
import { AuthModule } from './Auth/auth.module';
import { ReportModule } from './Reports/report.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.MYSQL_URL,
      ssl: { rejectUnauthorized: false }, 
      connectTimeout: 10000,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost', // Change if using a remote DB
    //   port: 3306, // Default MySQL port
    //   username: 'root', // Your phpMyAdmin username
    //   password: '', // Your MySQL password
    //   database: 'clinics', // Name of your database
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true, // Set to false in production!
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.DB_HOST,
    //   port: Number(process.env.DB_PORT),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: false, 
    // }),
    DoctorModule,
    ClinicsModule,
    SurgeryModule,
    PaymentModule,
    ReservationModule,
    PatientModule,
    AuthModule,
    ReportModule,
    MulterModule.register({
      dest: process.env.UPLOAD_PATH || './uploads',
    }),
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
