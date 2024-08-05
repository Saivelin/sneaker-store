"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainBlock from "@/entities/mainBlock/ui/MainBlock";
import Categories from "@/entities/categories/ui/categories/Categories";
import { useGetAllProductsInCategoryQuery } from "@/entities/categories/api/categoryApi";
import { Spinner } from "@/shared";
import { useParams } from "next/navigation";

const CategoryPage = ({ params }: { params: { id: number } }) => {
    const {data: categories, isFetching} = useGetAllProductsInCategoryQuery({id: params.id, page: 1, count: 10})

	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState([]);


	return (
		<div className="productsToCat">
			<Categories />
			<MainBlock />
            {isFetching ? <Spinner/> : null}
			{categories && categories?.items && categories.items.length != 0 ?
				<div className='trending'>
					<div className="trending__items">
						{categories.items.map((el, i) => {
							return (
								<div className="trending__item" key={i}>
									<Image loader={(e) => { return process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT + "/" + el?.gallery[0] }} alt={el?.title} className="trending__item-img" src={process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT + "/" + el?.gallery[0]} width={1000} height={1000} />
									<div className="trending__item-about">
										<Link href={"/products/" + el?.id} className="trending__item-header">{el?.title}</Link>
										<p className="trending__item-category">{el?.category.title}</p>
										<div className="trending__item-footer">
											<div className="trending__item-prices">
												<p className="trending__item-price">{el?.price}$</p>
											</div>
											<p className="trending__item-purchased">{el?.views} people purchased</p>
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

export default CategoryPage;