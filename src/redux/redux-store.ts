import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

let rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer
})

export type RootReducer = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

export type AppRootState = ReturnType<typeof store.getState>