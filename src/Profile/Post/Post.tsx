import React from "react";
import s from "./Post.module.css";

type PostType ={
	src: string;
	alt: string;
	postName: string;
}

export const Post = (props:PostType) => {
	return (
		<div className={s.item}>
			<img src={props.src} alt={props.alt}/>
			<div>{props.postName}</div>
		</div>
	);
}