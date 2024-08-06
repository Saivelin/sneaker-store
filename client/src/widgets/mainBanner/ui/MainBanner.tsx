import { Categories } from '@/entities/categories'
import styles from './MainBanner.module.scss'
import { MainBlock } from '@/entities/mainBlock'

const MainBanner = ({selectedCategory} : {selectedCategory?: number}) => {
    return (
        <div className={styles.mainGroup}>
            <Categories selectedCategory={selectedCategory}/>
            <MainBlock />
        </div>
    )
}

export default MainBanner
