import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class CreateUserDto {
    @IsEmail()
    @ApiProperty({description: "User email"})
    email: string
    @IsString()
    @ApiProperty({description: "User login"})
    login: string
    @IsString()
    @ApiProperty({description: "User password"})
    password: string
    @IsString()
    @ApiProperty({description: "User photo"})
    photo: string
}
