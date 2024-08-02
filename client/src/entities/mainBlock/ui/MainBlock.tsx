import Image from "next/image";
import Link from "next/link";
import css from "./MainBlock.module.scss"
const MainBlock = () => {
	return (
		<div className={css.mainBlock}>
			<p className={css.mainBlock__header}>BIG SALE 20%</p>
			<div className={css.mainBlock__texts}>
				<p className={css.mainBlock__texts_added}>the bestseller of 2022</p>
				<h2 className={css.mainBlock__mainHeader}>LENNON r2d2 <br /> with NVIDIA 5090 TI</h2>
				<Link href={"/"} className={css.mainBlock__btn}>Shop Now</Link>
			</div>
			{/* <Image className={css.mainBlock__image" src={"/mainBlock.png"} width={400} height={300} /> */}
		</div>
	);
};

export default MainBlock;