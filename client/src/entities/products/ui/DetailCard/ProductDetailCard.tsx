import { Spinner } from '@/shared'
import { onErrorImage } from '../../helpers/imageOnError'
import { productsItem } from '../../model/types'
import styles from './ProductDetailCard.module.scss'
import Link from 'next/link'

const ProductDetailCard = ({ product }: { product?: productsItem }) => {
    if (product) {
        return (
            <div className={styles.container}>
                <div className={styles.gallery}>
                    <img
                        alt={product?.title}
                        className={styles.img}
                        src={process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT + '/' + product?.gallery[0]}
                        onError={onErrorImage}
                    />
                </div>
                <div className={styles.about}>
                    <h1 className={styles.header}>{product?.title}</h1>
                    <p className={styles.price}>{product?.price}$</p>
                    <div className={styles.color}>
                        <p className={styles.text}>Color: </p>
                        <p className={styles.color}>Blanc</p>
                    </div>
                    {/* <div className="item__about-size">
                        <p className="item__about-size-text">Sizes: </p>
                        <div className="item__about-size-items">
                            {sizes.map((el) => {
                                return <button className={size == el ? "item__about-size-item item__about-size-item-active" : "item__about-size-item"} onClick={() => { setSize(el) }}>{el}</button>
                            })}
                        </div>
                    </div> */}
                    <p className={styles.text}>
                        {product?.description}
                    </p>
                    <div className={styles.btns}>
                        <button className={styles.toCart}>Add to cart</button>
                        <button className={styles.toFavorites}>Add to favorites</button>
                    </div>
                    <div className={styles.footer}>
                        <p className={styles.purchased}>19 people purchased</p>
                        <Link href={"/"} className={styles.find}>Find in a store</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Spinner />
    }
}

export default ProductDetailCard
