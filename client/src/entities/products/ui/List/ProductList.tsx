import { Spinner } from '@/shared'
import { productsItem } from '../../model/types'
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.scss'

const ProductList = ({ data }: { data?: productsItem[] }) => {
    if (data && data?.length && data?.length > 0) {
        return (
            <div className={styles.list}>
                {data.map(el => (
                    <ProductItem product={el} />
                ))}
            </div>
        )
    } else {
        return <Spinner/>
    }
}

export default ProductList
