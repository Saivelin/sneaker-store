import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    async login(@Body() {login, password} : {login: string, password: string}){
        return this.authService.login(login, password)
    }

    @Post('/registration')
    @UseGuards(JwtAuthGuard)
    async registration(@Body() {login, password} : {login: string, password: string}){
        return this.authService.registration(login, password)
    }
}
