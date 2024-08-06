import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags("Products")
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto)
    }

    @Get()
    getAll(){
        return this.productService.getAll()
    }

    @Get('/trending')
    getTrending(@Param() query: any){
        let count = 5
        if(query?.count){
            count = query.count
        }
        return this.productService.getTrending(count)
    }

    @Get(':id')
    getById(@Param() query: any){
        if(!query?.id){
            throw new HttpException("id is missing", HttpStatus.BAD_REQUEST)
        }
        return this.productService.getById(+query.id)
    }
}
