import { combineReducers, createStore } from "redux";
import { pageReducer } from "./openPage/reducer";


const rootReducer = combineReducers({
    openPage:pageReducer,
})

export const store = createStore(rootReducer)