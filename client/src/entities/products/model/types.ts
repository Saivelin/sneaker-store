import { Category } from "@/entities/categories"

export interface productsItem {
        id: number
        title: string
        description: string
        rating: number,
        price: number,
        gallery: string[],
        categoryId: 1,
        createdAt: Date,
        updatedAt: Date,
        category: Category
        reviews: any
        views?: number
}