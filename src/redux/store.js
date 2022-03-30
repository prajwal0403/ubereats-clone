import { combineReducers, createStore } from "redux";
import { NavBgReducer, navSearchReducer, pageReducer } from "./reducer";


const rootReducer = combineReducers({
    openPage:pageReducer,
    navSearch:navSearchReducer,
    setNavBg:NavBgReducer,
})

export const store = createStore(rootReducer)