"use client"

import { Inputs } from "@/shared";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import css from './Header.module.scss'

// AiOutlineSearch
const Header = () => {
	return (
		<Box className={css.header}>
			<div className={css.header__logo}>
				<Image src="/logo.svg" width={100} height={30} alt=""/>
			</div >
			<div className={css.header__user}>
				<div className={css.header__userimage__wrapper}>
					< Image src="/userPlaceholder.svg" width={30} height={30} className={css.header__userimage} alt=""/>
				</div>
				<p className={css.header__username}>header__username</p>
			</div >
			<div className={css.header__search}>
				< Inputs />
			</div >
			<nav className={css.header__nav}>
				< Link href={"/liked"} > <Image src={"/heart.svg"} width={40} height={40} alt=""/></Link >
				<Link href={"/cart"}><Image src={"/shopicon.svg"} width={40} height={40} alt=""/></Link>
			</nav >

		</Box >
	);
};

export default Header;