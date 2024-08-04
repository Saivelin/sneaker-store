'use client'

import { Box, useColorMode } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import css from './Categories.module.scss'
import styles from './Categories.module.scss'
import { Category } from '../../model/type'

export const getServerSideProps = async () => {
    axios
        .get(`http://localhost:8080/api/categories`)
        .then(e => {
            return {
                props: { itemsFromServe: e }
            }
        })
        .catch(er => {
            return {
                props: { itemsFromServe: er }
            }
        })
}

const Categories = ({ itemsFromServe }: { itemsFromServe?: Category[] }) => {
    const [categors, setCategors] = useState([
        {
            title: 'Computers',
            id: 1
        },
        {
            title: 'Clothes',
            id: 2
        },
        {
            title: 'Shoes',
            id: 3
        },
        {
            title: 'Furniture',
            id: 4
        }
    ])

    useEffect(() => {
        if (!itemsFromServe) {
            axios
                .get(`http://localhost:8080/api/categories`)
                .then(e => {
                    setCategors(e.data)
                })
                .catch(er => {
                    setCategors(er)
                })
        }
    }, [])

    return (
        <Box className={css.categories}>
            <h3 className={css.categories__header}> CATEGORIES</h3>
            <div className={css.categories__itemsWrapper}>
                {categors && categors?.length && categors?.length > 0
                    ? categors.map((el: Category, i) => {
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
