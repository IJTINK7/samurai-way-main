import React from "react";
import {MyPosts} from "./MyPosts";

export const Content = () => {
	return (
		<div className="content">
			<div className="imgContainer">
				<img
					src="https://phonoteka.org/uploads/posts/2021-06/1624448731_17-phonoteka_org-p-akatsuki-oboi-vertikalnie-krasivo-17.jpg"
					alt="content-img"/>
			</div>
			<div>Ava+Description</div>
			<MyPosts/>
		</div>
	);
}