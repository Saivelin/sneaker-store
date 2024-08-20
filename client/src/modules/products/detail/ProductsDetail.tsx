"use client"

import { Categories } from '@/entities/categories'
import { Container } from '@/shared'
import styles from './ProductsDetail.module.scss'
import ProductDetailCard from '@/entities/products/ui/DetailCard/ProductDetailCard'
import { useGetProductQuery } from '@/entities/products/api/productApi'

const ProductsDetail = ({ id }: { id: number }) => {
    const {data} = useGetProductQuery({id : id})

    return (
        <Container
            className={styles.container}
        >
            <Categories />
            <ProductDetailCard product={data}/>
        </Container>
    )
}

export default ProductsDetail
