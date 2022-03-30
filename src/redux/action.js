export const NAV_BG = 'NAV_BG';
export const OPEN_PAGE = 'OPEN_PAGE';
export const NAV_SEARCH = 'NAV_SEARCH';

export const setNavBg = (bg) =>({type:NAV_BG,payload:bg})
export const pageStatus = (openPage)=>({type:OPEN_PAGE,payload:openPage})
export const navSearch = (bg) =>({type:NAV_SEARCH,payload:bg})