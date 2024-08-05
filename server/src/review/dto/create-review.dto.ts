import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNumber, IsString, MinLength } from "class-validator"

export class CreateReviewDto {
    @IsString()
    @MinLength(2)
    @ApiProperty({description: "Text of review", default: "review"})
    text: string
    @IsInt()
    @ApiProperty({description: "Rating of review", default: 1})
    rating: number
    @IsInt()
    @ApiProperty({description: "Product of review", default: 1})
    product: any
    @IsInt()
    @ApiProperty({description: "Author of review", default: 1})
    author: number
}
