import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsInt, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateProductDto {
    @IsString({message: "Title: must be a string"})
    @MinLength(2, {message: "Title: more then one symbol"})
    @ApiProperty({ description: 'Product title' })
    title: string

    @ApiProperty({ description: 'Product description' })
    @IsString({message: "Description: must be a string"})
    description: string

    @ApiProperty({ description: 'price' })
    @IsInt({message: "price: must be a number"})
    price: number

    @ApiProperty({ description: 'Gallery item names' })
    @IsArray({message: "Gallery: must be array"})
    gallery: string[]

    @ApiProperty({ description: 'Category id' })
    category: number
}
