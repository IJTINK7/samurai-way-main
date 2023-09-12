import React from 'react';
import image from "./../images/sharingan.jpg"
export const Header = () => {
	return (
		<div className={"header_wrapper"}>
			<img src={image} alt={"Logo image"} className={"logo_image"}/>
		</div>
	);
};