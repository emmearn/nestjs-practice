import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    signUp(@Body() authAuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authAuthCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body() authAuthCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string}> {
        return this.authService.signIn(authAuthCredentialsDto);
    }
}
