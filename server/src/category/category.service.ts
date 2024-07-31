import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CategoryService {
    constructor(public prisma: PrismaService) {}

    async create(createCategoryDto: CreateCategoryDto) {
        let exist = await this.prisma.category.findFirst({ where: { title: createCategoryDto.title } })
        if (exist) {
            throw new HttpException(
                `Category with title "${createCategoryDto.title} already exist"`,
                HttpStatus.CONFLICT
            )
        }
        return this.prisma.category.create({data: createCategoryDto})
    }
}
