'use client'

import { Box, useColorMode } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import css from './Categories.module.scss'
import styles from './Categories.module.scss'
import { Category } from '../../model/type'
import { useGetAllCategoriesQuery } from '../../api/categoryApi'
import { Spinner } from '@/shared'

const Categories = () => {
    const {data: categories, isFetching} = useGetAllCategoriesQuery()

    return (
        <Box className={css.categories}>
            <h3 className={css.categories__header}> CATEGORIES</h3>
            <div className={css.categories__itemsWrapper}>
                {
                    isFetching ? 
                        <Spinner/>
                    : null
                }
                {categories && categories?.length && categories?.length > 0
                    ? categories.map((el: Category, i) => {
                        return (
                            <Link
                                key={i}
                                className={css.categories__item}
                                href={'/category/' + el.id}
                            >
                                {el.title}
                            </Link>
                        )
                    })
                : null}
            </div>
            <div className={styles.categories__footer}>
                <Link href={'/help'}>Help</Link>
                <Link href={'/terms-and-conditions'}>Terms & Conditions</Link>
            </div>
        </Box>
    )
}

export default Categories
