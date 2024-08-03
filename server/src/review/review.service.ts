import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateReviewDto } from './dto/create-review.dto'
import { UpdateReviewDto } from './dto/update-review.dto'
import { PrismaService } from 'src/prisma.service'
import { ProductService } from 'src/product/product.service'

@Injectable()
export class ReviewService {
    constructor(
        private prisma: PrismaService,
        private productService: ProductService
    ) {}
    async create(createReviewDto: CreateReviewDto) {
        let product = await this.productService.getById(createReviewDto.product)
        let exist = false

        await product.reviews.map(async el => {
            if (el.authorId === createReviewDto.author) {
                exist = true
            }
        })

        if (exist === false) {
            let additionalData = {products: { connect: { id: createReviewDto.product } },
            author: { connect: { id: createReviewDto.author } }}
            delete createReviewDto.product
            delete createReviewDto.author
            return await this.prisma.review.create({
                data: {
                    ...createReviewDto,
                    ...additionalData
                }
            })
        } else {
            throw new HttpException(
                `Product with id ${createReviewDto.product} already have review by author ${createReviewDto.author}`,
                HttpStatus.CONFLICT
            )
        }
    }

    findAll() {
        return this.prisma.review.findMany()
    }

    findOne(id: number) {
        return this.prisma.review.findFirst({ where: { id: id } })
    }

    // update(id: number, updateReviewDto: UpdateReviewDto) {
    //     return this.prisma.review.update({ data: updateReviewDto, where: { id: id } })
    // }

    remove(id: number) {
        return `This action removes a #${id} review`
    }
}
