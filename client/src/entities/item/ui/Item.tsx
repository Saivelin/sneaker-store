import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./Item.module.scss";

const Item = ({ item }) => {
	const [sizes, setSizes] = useState([4.5, 5, 5.5]);
	const [size, setSize] = useState(sizes[0]);
	return (
		<div className={css.item}>
			<div className={css.item__galery}>
				<Image
					loader={(e) => {
						return "http://localhost:8080/images/" + item?.img;
					}}
					src={item?.img}
					width={1000}
					height={1000}
				/>
			</div>
			<div className={css.item__about}>
				<h1 className={css.item__about_header}>{item?.title}</h1>
				<p className={css.item__about_price}>{item?.price}$</p>
				<div className={css.item__about_color}>
					< p className={css.item__about_color_text}>Color: </p>
					< p className={css.item__about_color_color}>Blanc</p>
				</div >
				<div className={css.item__about_size}>
					< p className={css.item__about_size_text}>Sizes: </p>
					< div className={css.item__about_size_items}>
						{
							sizes.map((el) => {
								return (
									<button
										className={
											size == el
												? "item__about-size-item item__about-size-item-active"
												: "item__about-size-item"
										}
										onClick={() => {
											setSize(el);
										}}>
										{el}
									</button>
								);
							})
						}
					</div >
				</div >
				<p className={css.item__about_text}>{item?.description}</p>
				< div className={css.item__about_btns}>
					< button className={css.item__about_toCart}>Add to cart</button>
					< button className={css.item__about_toFavorites}>Add to favorites</button>
				</div >
				<div className={css.item__about_footer}>
					< p className={css.item__about - footer_purchased}>19 people purchased</p>
					< Link href={"/"} className={css.item__about_footer_find}>
						Find in a store
					</Link >
				</div >
			</div >
		</div >
	);
};

export default Item;
