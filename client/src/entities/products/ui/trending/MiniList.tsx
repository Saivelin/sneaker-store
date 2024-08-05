'use client'
import Link from 'next/link'
import css from './MiniList.module.scss'
import { useGetTrendingQuery } from '@/entities/products/api/productApi'
import { Spinner } from '@/shared'
import { productsItem } from '../../model/types'

const MiniList = ({ title, data, isFetching }: { title: string, data?: productsItem[], isFetching: boolean }) => {
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
                {data &&
                    data?.length &&
                    data?.length > 0 &&
                    data.map(el => {
                        return (
                            <div className={css.trending__item}>
                                <img
                                    className={css.trending__item_img}
                                    src={`${process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT}/${el.gallery[0]}`}
                                    alt=''
                                />
                                <div className={css.trending__item_about}>
                                    <p className={css.trending__item_header}>{el.title}</p>
                                    <p className={css.trending__item_category}>{el.category.title}</p>
                                    <div className={css.trending__item_footer}>
                                        <div className={css.trending__item_prices}>
                                            <p className={css.trending__item_price}>{el.price}</p>
                                        </div>
                                        <p className={css.trending__item_purchased}>{el.views} people purchased</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
