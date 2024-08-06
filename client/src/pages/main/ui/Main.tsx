import Sale from '@/entities/sale/ui/Sale'
import WorthSeeing from '@/entities/worthSeeing/ui/WorthSeeing'
import { ProductList, Trending } from '@/widgets/product'
import { Container } from '@/shared'
import { MiniList } from '@/entities/products'
import { MainBanner } from '@/widgets/mainBanner'

const Main = () => {
    return (
        <Container>
            <MainBanner/>
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
