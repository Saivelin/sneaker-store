import MainBlock from '@/entities/mainBlock/ui/MainBlock'
import Sale from '@/entities/sale/ui/Sale'
import WorthSeeing from '@/entities/worthSeeing/ui/WorthSeeing'
import Categories from '@/entities/categories/ui/categories/Categories'
import { ProductList, Trending } from '@/widgets/product'
import { Box } from '@chakra-ui/react'
import { Container } from '@/shared'
import styles from './Main.module.scss'
import { MiniList } from '@/entities/products'

const Main = () => {
    return (
        <Container>
            <div className={styles.mainGroup}>
                <Categories />
                <MainBlock />
            </div>
            <Trending />
            <WorthSeeing />
            <Sale />
            <MiniList
                title={'Less than 100$'}
                data={[]}
                isFetching={true}
            />
        </Container>
    )
}

export default Main
