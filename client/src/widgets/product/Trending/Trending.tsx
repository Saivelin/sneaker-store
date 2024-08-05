"use client"

import { MiniList } from '@/entities/products'
import { useGetTrendingQuery } from '@/entities/products/api/productApi'

const Trending = () => {
    const { data: trending, isFetching } = useGetTrendingQuery({ count: 5 })
    return (
        <MiniList
            title='Trending'
            data={trending}
            isFetching={isFetching}
        />
    )
}

export default Trending
