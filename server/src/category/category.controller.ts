import { Controller, Get, Post, Body,UsePipes, ValidationPipe, Param, Query, HttpException, HttpStatus } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { ApiParam, ApiTags } from '@nestjs/swagger'

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
    @ApiParam({name: "id", required: true, type: "integer"})
    getProducts(@Param() params: {id: number}, @Query() query){
        if(query?.page && query?.count){
            return this.categoryService.getProductsByCategoryId(+params.id, +query.page, +query.count)
        }
        throw new HttpException("page or count is missing", HttpStatus.BAD_REQUEST)
    }
}
