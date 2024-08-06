import Image from "next/image"
import { productsItem } from "../../model/types"
import Link from "next/link"
import styles from "./ProductItem.module.scss"

const ProductItem = ({product} : {product: productsItem}) => {
    return (
        <div
            className={styles.item}
            key={product.id}
        >
            <div className={styles.imageContainer}>
                <img
                    alt={product?.title}
                    className={styles.img}
                    src={process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT + "/" + product?.gallery[0]}
                    onError={(e: any)=>{
                        e.target.src = process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT + "/defaultProductImage.png"
                    }}
                />
            </div>
            <div className={styles.item_about}>
                <Link
                    href={'/products/' + product?.id}
                    className={styles.item_header}
                >
                    {product?.title}
                </Link>
                <p className={styles.item_category}>{product?.category?.title}</p>
                <div className={styles.item_footer}>
                    <div className={styles.item_prices}>
                        <p className={styles.item_price}>{product?.price}$</p>
                    </div>
                    <p className={styles.item_purchased}>{product?.views} people purchased</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
