import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Car } from './AllCars/entities/car.entity';
import { MulterModule } from '@nestjs/platform-express';
import { DoctorModule } from './Doctors/doctor.module';
import { ClinicsModule } from './Clinics/clinics.module';
import { SurgeryModule } from './Surgery/surgery.module';
import { PaymentModule } from './PaymentActivate/payment.module';
import { ReservationModule } from './reservation/reservation.module';
import { PatientModule } from './Patient/patient.module';
import { AuthModule } from './Auth/auth.module';
import { ReportModule } from './Reports/report.module';

@Module({
  imports: [
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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // مهم جدًا في production
    }),
    DoctorModule,
    ClinicsModule,
    SurgeryModule,
    PaymentModule,
    ReservationModule,
    PatientModule,
    AuthModule,
    ReportModule,
    MulterModule.register({
      dest: './uploads', // This is where images will be stored
    }),
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
