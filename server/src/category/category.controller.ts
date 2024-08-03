import { Controller, Get, Post, Body,UsePipes, ValidationPipe, Param } from '@nestjs/common'
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

    @Get()
    getAll(){
        return this.categoryService.getAll()
    }

    @Get('/:id/products')
    getProducts(@Param() params: {id: number}){
        return this.categoryService.getProductsByCategoryId(+params.id)
    }
}
