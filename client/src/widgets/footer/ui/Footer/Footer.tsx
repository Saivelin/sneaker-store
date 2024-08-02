import Image from "next/image";
import css from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={css.footer}>
			<div className={css.footer__wrapper}>
				<Image src={"/logo.svg"} width={70} height={35} />
				<p>Developed by <span>Tomkovich</span></p>
				<div className={css.footer__societies}>
					<div className={css.footer__societies_item}>
						<Image src={"/facebook.svg"} width={40} height={40} />
					</div>
					<div className={css.footer__societies_item}>
						< Image src={"/facebook.svg"} width={40} height={40} />
					</div >
					<div className={css.footer__societies_item}>
						< Image src={"/facebook.svg"} width={40} height={40} />
					</div >
				</div >
			</div >
		</div >
	);
};

export default Footer;