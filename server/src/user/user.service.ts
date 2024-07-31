import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
    constructor(public prisma: PrismaService){}
    create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({data: createUserDto})
    }

    findOne(id?: number, email?: string) {
        if(id || email){
            if(email){
                return this.prisma.user.findFirst({where: {email: email}})
            } else if (id){
                return this.prisma.user.findFirst({where: {id: id}})
            }
        }
        throw new HttpException("id or email not found", HttpStatus.NOT_FOUND)
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}
