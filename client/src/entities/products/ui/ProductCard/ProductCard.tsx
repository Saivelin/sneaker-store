import { productsItem } from "../../model/types"

const ProductCard = ({ item }: { item: productsItem }) => {
    return <div>
        <h2>{item?.title}</h2>
        <p>{item.description}</p>
    </div>
}

export default ProductCard
