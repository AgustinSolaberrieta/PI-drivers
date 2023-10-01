import { GET_DRIVERS,GET_DRIVERS_DETAIL } from "./action-types";

const initialState={
    drivers: [],
    driversDetail : {}
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case GET_DRIVERS:
            return{
                ...state,
                drivers: action.payload
            }   
            
        case GET_DRIVERS_DETAIL:
            return{
                ...state,
                driversDetail: action.payload
            }    
        default:
            return {...state}
    }
}
export default reducer;