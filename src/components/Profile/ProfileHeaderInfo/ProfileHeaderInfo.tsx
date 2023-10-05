import React from 'react';
import img from "../../../images/obita-uchiha-sage-of-six-paths.jpg";

type PropsType = {}
export const ProfileHeaderInfo: React.FC<PropsType> = ({...restProps}) => {
	return (
		<div>
			<div>
				Obito Uchiha
			</div>
			<div>
				<img src={img} alt="obita-uchiha-sage-of-six-paths" width="500px"/>
			</div>
		</div>
	);
};