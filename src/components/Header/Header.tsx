import React from 'react';
import image from "../../images/sharingan.jpg"
import s from "./Header.module.css"
export const Header = () => {
	return (
		<div className={s.header_wrapper}>
			<img src={image} alt={"Logo image"} className={s.logo_image}/>
		</div>
	);
};