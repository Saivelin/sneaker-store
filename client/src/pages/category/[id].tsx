import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import MainBlock from "@/entities/mainBlock/ui/MainBlock";
import Categories from "@/features/categories/ui/categories/Categories";

export const getServerSideProps = async (context) => {
	const { id } = context.params
	const res = await fetch(`http://localhost:8080/api/products/category/${id}`)
	const data = await res.json()

	if (!data) {
		return {
			nf: true
		}
	}

	return {
		props: { itemsFromServe: data }
	}
}

const ProductsToCat = ({ itemsFromServe }) => {
	const router = useRouter();

	const [items, setItems] = useState(itemsFromServe)

	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState([]);


	return (
		<div className="productsToCat">
			<Categories />
			<MainBlock />
			{itemsFromServe.length != 0 ?
				<div className='trending'>
					<div className="trending__items">
						{itemsFromServe.map((el, i) => {
							return (
								<div className="trending__item" key={i}>
									<Image loader={(e) => { return "http://localhost:8080/images/" + el?.img }} alt={el?.title} className="trending__item-img" src={el?.img} width={1000} height={1000} />
									<div className="trending__item-about">
										<Link href={"/products/" + el?.id} className="trending__item-header">{el?.title}</Link>
										<p className="trending__item-category">{el?.category}</p>
										<div className="trending__item-footer">
											<div className="trending__item-prices">
												<p className="trending__item-price">{el?.price}$</p>
												<p className="trending__item-oldprice">{el?.oldprice}$</p>
											</div>
											<p className="trending__item-purchased">{el?.purchased} people purchased</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
					<div className="productsToCat__pagesPagination">
						{pageCount.map((el) => {
							return <button onClick={(ev) => { setPage(el) }} className={page == el ? "productsToCat__pagesPagination-item productsToCat__pagesPagination-itemActive" : "productsToCat__pagesPagination-item"}>{el}</button>
						})}
					</div>
				</div>
				:
				<div className='trending'>
					<h2>No such products</h2>
				</div>
			}
		</div>
	);
};

export default ProductsToCat;