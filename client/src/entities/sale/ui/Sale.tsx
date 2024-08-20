import Link from "next/link";
import Image from "next/image";
import css from './Sale.module.scss'

const Sale = () => {
	return (
		<div className={css.sale}>
			<div className={css.sale__left}>
				<div className={css.sale__leftWrapper}>
					<div className={css.sale__header}>
						<p className={css.sale__light}>NEW YEAR</p>
						<p className={css.sale__big}>SALE</p>
					</div>

					<Link className={css.sale__btn} href={"/"} >See more</Link>
				</div>
			</div>
			<Image src={"/newYear.png"} width={600} height={600} alt=""/>
		</div>
	);
};

export default Sale;