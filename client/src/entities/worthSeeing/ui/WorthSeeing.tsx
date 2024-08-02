import { useState } from "react";
import Image from "next/image";
import css from "./WorthSeeing.module.scss"

const WorthSeeing = () => {
	const [worth, setWorth] = useState([{
		img: "/sneakers.png",
		cat: "sneakers"
	},
	{
		img: "/sneakers.png",
		cat: "sneakers"
	},
	{
		img: "/sneakers.png",
		cat: "sneakers"
	},
	{
		img: "/sneakers.png",
		cat: "sneakers"
	},
	{
		img: "/sneakers.png",
		cat: "sneakers"
	},
	])

	return (
		<div className={css.WorthSeeing}>
			<h2 className={css.WorthSeeing__header}>Worth seeing</h2>
			<div className={css.WorthSeeing__items}>
				{worth.map((el) => {
					return (
						<div className={css.WorthSeeing__item}>
							<Image className={css.WorthSeeing__item_img} src={el.img} width={400} height={300} />
							<h4 className={css.WorthSeeing__item_header}>{el.cat}</h4>
						</div>
					)
				})}
			</div>
		</div>
	);
};

export default WorthSeeing;