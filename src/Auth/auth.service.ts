import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signUp(email: string, password: string, username: string, phone: string) {
    // التحقق إذا كان المستخدم موجود بالفعل
    const existingUser = await this.userRepository.findOne({ where: { email } });

    if (existingUser) {
      // إذا كان المستخدم موجود بالفعل
      throw new ConflictException('المستخدم موجود بالفعل. من فضلك قم بتسجيل الدخول.');
    }

    // إنشاء مستخدم جديد دون تشفير كلمة المرور
    const newUser = this.userRepository.create({
      email,
      password,  // كلمة المرور تُخزن كما هي
      username,
      phone,
    });

    // حفظ المستخدم الجديد في قاعدة البيانات
    await this.userRepository.save(newUser);

    // الرد برسالة تأكيد
    return { message: 'تم إنشاء الحساب بنجاح' };
  }

  async signIn(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
  
    if (!user) {
      throw new UnauthorizedException('تسجيل الدخول فشل، تحقق من البيانات.');
    }
  
    console.log('Received Password:', password);
    console.log('Stored Password:', user.password);
  
    if (password !== user.password) {
      throw new UnauthorizedException('كلمة المرور غير صحيحة.');
    }
  
    return { message: 'تم تسجيل الدخول بنجاح' };
  }
  
}
