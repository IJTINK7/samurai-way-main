import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
type PropsType = {}
export const Dialogs: React.FC<PropsType> = () => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialogs_items}>
				{/*<div className={s.dialogs_item}>Minato</div>*/}
				{/*<div className={s.dialogs_item}>Kakashi</div>*/}
				{/*<div className={s.dialogs_item}>Rin</div>*/}
				<div className={s.dialogs_item}><NavLink to="/dialogs/1" className={({isActive})=>isActive ? s.activeLink : s.navLink}>Minato</NavLink></div>
				<div className={s.dialogs_item}><NavLink to="/dialogs/2" className={({isActive})=>isActive ? s.activeLink : s.navLink}>Kakashi</NavLink></div>
				<div className={s.dialogs_item}><NavLink to="/dialogs/3" className={({isActive})=>isActive ? s.activeLink : s.navLink}>Rin</NavLink></div>
			</div>
			<div className={s.dialogs_messages}>
				<div className={s.dialogs_message}>You and I will become Hokage.</div>
				<div className={s.dialogs_message}>Do you know what happens to people who break the rules?</div>
				<div className={s.dialogs_message}>Become Hokage and show me how you'll save the world!</div>
			</div>
		</div>
	);
};