import { Category } from "src/category/entities/category.entity";
import { Review } from "src/review/entities/review.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({default: 0})
    rating: 0 | 1 | 2 | 3 | 4 | 5

    @Column()
    price: number

    @Column({default: []})
    gallery: string[]

    @ManyToOne(()=>Category, (category)=>{category.products})
    category: Category

    @OneToMany(()=>Review, (review)=>{review.products})
    reviews: Review[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
