import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from './entities/product.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

    async create(createProductDto: CreateProductDto) {
        const exist = await this.productRepository.findOne({where: {title: createProductDto.title}})
        if(exist){
            throw new HttpException(
                `Category with title "${createProductDto.title} already exist"`,
                HttpStatus.CONFLICT
            )
        }
        return this.productRepository.save(createProductDto)
    }
}
