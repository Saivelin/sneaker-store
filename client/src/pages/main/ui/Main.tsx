import MainBlock from "@/entities/mainBlock/ui/MainBlock";
import Sale from "@/entities/sale/ui/Sale";
import Trending from "@/entities/trending/ui/Trending";
import WorthSeeing from "@/entities/worthSeeing/ui/WorthSeeing";
import Categories from "@/entities/categories/ui/categories/Categories";
import { ProductList } from "@/widgets/product"
import { Box } from "@chakra-ui/react";
import { Container } from "@/shared";
import styles from "./Main.module.scss"

const Main = () => {
	return (
		<Container>
            <div className={styles.mainGroup}>
                <Categories />
                <MainBlock />
            </div>
			<Trending title={"Trending"} />
			<WorthSeeing />
			<Sale />
			<Trending title={"Less than 100$"} />
		</Container>
	);
}

export default Main
