import { Product } from "src/product/entities/product.entity";
import { ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Review {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Product, (product)=>{product.reviews})
    products: Product
}
