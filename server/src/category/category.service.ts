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

    async getAll(){
        return this.prisma.category.findMany()
    }

    async getProductsByCategoryId(id: number, page: number, count: number){
        let products = (await this.prisma.category.findFirst({where: {id: id}, select: {products: true}})).products
        if(!products){
            throw new HttpException(`Category with id ${id} does not exist. Or there are no products in the selected category`, HttpStatus.NOT_FOUND)
        }
        let res = [...products.slice((page - 1) * count, page * count)]
        return {items: res, count: products.length}
    }
}
