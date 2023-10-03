import { CLEAN_DETAIL, GET_DRIVERS,GET_DRIVERS_DETAIL, SEARCHBAR, SET_CURRENT_PAGE } from "./action-types";

const initialState={
    drivers: [],
    currentPage: 1,
    currentPerPage: 9,
    driversDetail : {},
    searchBar: []
    
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case GET_DRIVERS:
            return{
                ...state,
                drivers: action.payload
            }   
         case SET_CURRENT_PAGE:
            
            return {
                ...state,
                currentPage: action.payload
            }    

        case GET_DRIVERS_DETAIL:
            return{
                ...state,
                driversDetail: action.payload
            }    
        case CLEAN_DETAIL:
        return{
           ...state,
           driversDetail: {}

        }
        case SEARCHBAR:
            return{
                ...state,
                searchBar: action.payload
            }
        
            
       
        default:
            return {...state}
    }
}
export default reducer;