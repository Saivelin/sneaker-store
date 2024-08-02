import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import { AdminService } from 'src/admin/admin.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UserService, private adminService: AdminService){}

    async login(login, password){
        const user = await this.validateUser(login, password)
        return this.generateToken(user)
    }

    async registration(login, password){
        // const candidate = await this.userService.findOne(login)
        // if(candidate){
        //     throw new HttpException("Error", HttpStatus.BAD_REQUEST)
        // }
        // const hashPassword = await bcrypt.hash(password, 5)
        // const user = await this.userService.createAdmin(login, hashPassword)
        // return this.generateToken(user)
    }

    private async generateToken(user){
        // const payload = {login: user.login, id: user.id}
        // return {
        //     token: this.jwtService.sign(payload)
        // }
    }

    private async validateUser(login, password) {
        // const user = await this.userService.getUserByLogin(login)
        // if(!user){
        //     throw new HttpException("Not found", HttpStatus.NOT_FOUND)
        // }
        // const passwordEquals = await bcrypt.compare(password, user.password)

        // if(user && passwordEquals){
        //     return user;
        // }
        // throw new UnauthorizedException({message: "Некорректный логин или пароль пользователя"})
    }
}
