import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProductService {
    constructor(public prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto) {
        const exist = await this.prisma.product.findFirst({ where: { title: createProductDto.title } })
        if (exist) {
            throw new HttpException(
                `Category with title "${createProductDto.title} already exist"`,
                HttpStatus.CONFLICT
            )
        }
        return this.prisma.product.create({
            data: { ...createProductDto, category: { connect: { id: createProductDto.category } } }
        })
    }

    async getAll() {
        const items = await this.prisma.product.findMany({ include: { category: true, reviews: true } })
        if (items) {
            return items
        }
        throw new HttpException(`Products is empty`, HttpStatus.NOT_FOUND)
    }
}
