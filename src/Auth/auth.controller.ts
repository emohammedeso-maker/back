import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.signIn(email, password);
  }

  @Post('signup')
    signUp(
      @Body('email') email: string,
      @Body('password') password: string,
      @Body('username') username: string,
      @Body('phone') phone: string,
    ) {
      return this.authService.signUp(email, password, username, phone);
    }
}
