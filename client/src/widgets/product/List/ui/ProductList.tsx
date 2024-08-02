'use client'

import { ProductCard } from '@/entities/products'
import { useGetAllProductsQuery } from '@/entities/products'
import { Spinner } from '@/shared'

const ProductList = () => {
    const { data: list, isFetching: fetching } = useGetAllProductsQuery()

    return (
        <div>
            {fetching === true ? <Spinner/> : null}
            {list && list.length > 0 ? list.map(el => <ProductCard item={el} />) : null}
        </div>
    )
}

export default ProductList
