import Image from "next/image";
import css from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={css.footer}>
			<div className={css.footer__wrapper}>
				<Image src={"/logo.svg"} width={70} height={35} alt=""/>
				<p>Developed by <span>Tomkovich</span></p>
				<div className={css.footer__societies}>
					<div className={css.footer__societies_item}>
					</div>
					<div className={css.footer__societies_item}>
					</div >
					<div className={css.footer__societies_item}>
					</div >
				</div >
			</div >
		</div >
	);
};

export default Footer;