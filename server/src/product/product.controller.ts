import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
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
}
