'use client'

import { useEffect, useState } from 'react'
import { useGetAllProductsInCategoryQuery, useGetCategoryQuery } from '@/entities/categories/api/categoryApi'
import { Container, Spinner } from '@/shared'
import { MainBanner } from '@/widgets/mainBanner'
import { ProductList } from '@/entities/products'
import styles from './CategoryPage.module.scss'
import Header from '@/shared/ui/Header/Header'

const CategoryPage = ({ id }: { id: number }) => {
    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(10)
    const [pageCount, setPageCount] = useState<number[]>([1, 2, 3])

    const { data: categories, isFetching } = useGetAllProductsInCategoryQuery({ id: id, page: page, count: 10 })
    const { data: category, isFetching: categoryFetch } = useGetCategoryQuery({ id })

    useEffect(() => {
        if (categories && categories?.count) {
            const totalPages = Math.ceil(categories?.count / count)
            const pagesArray = Array.from({ length: totalPages }, (v, i) => i + 1)
            setPageCount([...pagesArray])
        }
    }, [categories])

    return (
        <Container>
            <MainBanner selectedCategory={id} />
            {isFetching ? <Spinner /> : null}
            {categories && categories?.items && categories.items.length != 0 ? (
                <div className={styles.content}>
                    {category ? <Header style={{ marginBottom: '20px' }}>{category.title}</Header> : <Spinner />}
                    <ProductList data={categories.items} />
                    <div className={styles.pagesPagination}>
                        {pageCount.map(el => {
                            return (
                                <button
                                    onClick={ev => {
                                        setPage(el)
                                    }}
                                    className={page == el ? `${styles.item} ${styles.itemActive}` : styles.item}
                                >
                                    {el}
                                </button>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className='trending'>
                    <h2>No such products</h2>
                </div>
            )}
        </Container>
    )
}

export default CategoryPage
