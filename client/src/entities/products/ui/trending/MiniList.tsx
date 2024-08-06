'use client'
import Link from 'next/link'
import css from './MiniList.module.scss'
import { useGetTrendingQuery } from '@/entities/products/api/productApi'
import { Spinner } from '@/shared'
import { productsItem } from '../../model/types'
import ProductItem from '../ProductItem/ProductItem'

const MiniList = ({ title, data, isFetching }: { title: string; data?: productsItem[]; isFetching: boolean }) => {
    // const [trending, setTrending] = useState([
    // 	{
    // 		id: 1,
    // 		title: "Nike ZoomX 2023",
    // 		category: "Sneakers",
    // 		price: "99$",
    // 		oldprice: "79$",
    // 		purchased: "19",
    // 		img: "/nikeZoomX.png",
    // 	},
    // 	{
    // 		id: 2,
    // 		title: "Nike ZoomX 2023",
    // 		category: "Sneakers",
    // 		price: "99$",
    // 		oldprice: "79$",
    // 		purchased: "19",
    // 		img: "/nikeZoomX.png",
    // 	},
    // 	{
    // 		id: 3,
    // 		title: "Nike ZoomX 2023",
    // 		category: "Sneakers",
    // 		price: "99$",
    // 		oldprice: "79$",
    // 		purchased: "19",
    // 		img: "/nikeZoomX.png",
    // 	},
    // 	{
    // 		id: 4,
    // 		title: "Nike ZoomX 2023",
    // 		category: "Sneakers",
    // 		price: "99$",
    // 		oldprice: "79$",
    // 		purchased: "19",
    // 		img: "/nikeZoomX.png",
    // 	},
    // 	{
    // 		id: 5,
    // 		title: "Nike ZoomX 2023",
    // 		category: "Sneakers",
    // 		price: "99$",
    // 		oldprice: "79$",
    // 		purchased: "19",
    // 		img: "/nikeZoomX.png",
    // 	},
    // ])

    return (
        <div className={css.trending}>
            <div className={css.trending__header}>{title}</div>
            <div className={css.trending__items}>
                {isFetching ? <Spinner /> : null}
                {data && data?.length && data?.length > 0 && data.map(el => <ProductItem product={el} />)}
            </div>
            <div className={css.trending__btnWrapper}>
                <Link
                    className={css.trending__btn}
                    href={'/'}
                >
                    See more
                </Link>
            </div>
        </div>
    )
}

export default MiniList
