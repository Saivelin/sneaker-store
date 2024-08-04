import MainBlock from "@/entities/mainBlock/ui/MainBlock";
import Sale from "@/entities/sale/ui/Sale";
import Trending from "@/entities/trending/ui/Trending";
import WorthSeeing from "@/entities/worthSeeing/ui/WorthSeeing";
import Categories from "@/entities/categories/ui/categories/Categories";
import { ProductList } from "@/widgets/product"
import { Box } from "@chakra-ui/react";
const Main = () => {
	return (
		<Box bg="#212123" className="mainPage">
			<Categories />
			<ProductList />
			<MainBlock />
			<Trending title={"Trending"} />
			<WorthSeeing />
			<Sale />
			<Trending title={"Less than 100$"} />
		</Box>
	);
}

export default Main
