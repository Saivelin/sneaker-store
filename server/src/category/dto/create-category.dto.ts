import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @MinLength(2, {message: "Title must be more when one symbol"})
    @ApiProperty({description: "Category title", minLength: 2})
    title: string
}
