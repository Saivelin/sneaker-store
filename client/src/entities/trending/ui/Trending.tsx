import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./Trending.module.scss"

const Trending = ({ title }) => {
	const [trending, setTrending] = useState([
		{
			id: 1,
			title: "Nike ZoomX 2023",
			category: "Sneakers",
			price: "99$",
			oldprice: "79$",
			purchased: "19",
			img: "/nikeZoomX.png",
		},
		{
			id: 2,
			title: "Nike ZoomX 2023",
			category: "Sneakers",
			price: "99$",
			oldprice: "79$",
			purchased: "19",
			img: "/nikeZoomX.png",
		},
		{
			id: 3,
			title: "Nike ZoomX 2023",
			category: "Sneakers",
			price: "99$",
			oldprice: "79$",
			purchased: "19",
			img: "/nikeZoomX.png",
		},
		{
			id: 4,
			title: "Nike ZoomX 2023",
			category: "Sneakers",
			price: "99$",
			oldprice: "79$",
			purchased: "19",
			img: "/nikeZoomX.png",
		},
		{
			id: 5,
			title: "Nike ZoomX 2023",
			category: "Sneakers",
			price: "99$",
			oldprice: "79$",
			purchased: "19",
			img: "/nikeZoomX.png",
		},
	])

	return (
		<div className={css.trending}>
			<div className={css.trending__header}>{title}</div>
			<div className={css.trending__items}>
				{trending.map((el) => {
					return (
						<div className={css.trending__item}>
							<Image className={css.trending__item_img} src={el.img} width={1000} height={1000} />
							<div className={css.trending__item_about}>
								<p className={css.trending__item_header}>{el.title}</p>
								<p className={css.trending__item_category}>{el.category}</p>
								<div className={css.trending__item_footer}>
									<div className={css.trending__item_prices}>
										<p className={css.trending__item_price}>{el.price}</p>
										<p className={css.trending__item_oldprice}>{el.oldprice}</p>
									</div>
									<p className={css.trending__item_purchased}>{el.purchased} people purchased</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className={css.trending__btnWrapper}>
				<Link className={css.trending__btn} href={"/"}>See more</Link>
			</div>
		</div>
	);
};

export default Trending;