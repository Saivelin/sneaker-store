import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

    async create(createCategoryDto: CreateCategoryDto) {
        let exist = await this.categoryRepository.findOne({ where: { title: createCategoryDto.title } })
        if (exist) {
            throw new HttpException(
                `Category with title "${createCategoryDto.title} already exist"`,
                HttpStatus.CONFLICT
            )
        }
        return this.categoryRepository.save(createCategoryDto)
    }
}
