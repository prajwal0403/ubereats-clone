import { NAV_SEARCH, OPEN_PAGE } from "./action";
import { NAV_BG } from "./action";


export const NavBgReducer = (store={setNavBg:'transparent'},{type,payload})=>{
    switch(type){
        case NAV_BG:
            return{setNavBg:payload}
        default:
            return store;
   }
}

export const pageReducer = (store={openPage:false},{type,payload})=>{
    switch(type){
        case OPEN_PAGE:
          return {openPage:payload}
        default:
            return store;
    }
}

export const navSearchReducer = (store={navSearch:false},{type,payload})=>{
    switch(type){
        case NAV_SEARCH:
            return {navSearch:payload}
        default:
            return store;
    }
}


