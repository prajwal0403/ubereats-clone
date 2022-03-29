import { OPEN_PAGE } from "./action";



export const pageReducer = (store={openPage:false},{type,payload})=>{
    switch(type){
        case OPEN_PAGE:
          return {openPage:payload}
        default:
            return store;
    }
}