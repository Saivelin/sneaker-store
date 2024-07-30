import { Controller, Get, Post, Body,UsePipes, ValidationPipe } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags("Categories")
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto)
    }
}
