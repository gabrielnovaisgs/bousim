import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './auth.dto';
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';
@Controller('auth')
export class AuthController {
  @Post('/sign-in')
  singIn(@Body() signInDto: SignInDto) {
    if (signInDto.password !== '123') {
      throw new UnauthorizedException();
    }
    console.log('signInDto', signInDto);
    return {
      email: signInDto.email,
      access_token: accessToken,
      id_token: '',
    };
  }
}
