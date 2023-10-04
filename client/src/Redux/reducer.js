import { CLEAN_DETAIL, GET_DRIVERS,GET_DRIVERS_DETAIL, SEARCHBAR} from "./action-types";

const initialState={
    drivers: [],
    // currentPage: 1,
    // currentPerPage: 9,
    driversDetail : {},
    
    
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case GET_DRIVERS:
            return{
                ...state,
                drivers: action.payload
            }   
        //  case SET_CURRENT_PAGE:
            
        //     return {
        //         ...state,
        //         currentPage: action.payload
        //     }    

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
                drivers: action.payload
            }

        // case ORDERCARDS_NAME_ASC:
        //     const sortedByNameAsc = [...state.drivers.data].sort((a, b)=>{
        //         return a.name.localeCompare(b.name)
        //     }); 
        //     return {
        //         ...state,
        //         drivers: {
        //           ...state.drivers,
        //           data: sortedByNameAsc
        //         }
        //       };
        // case ORDERCARDS_NAME_DESC:
        //     const sortedByNameDesc = [...state.drivers.data].sort((a, b)=>{
        //         return b.name.localeCompare(a.name)
        //     }); 
        //     return {
        //         ...state,
        //         drivers: {
        //           ...state.drivers,
        //           data: sortedByNameDesc
        //         }
        //       };
        // case ORDERCARD_DOB_ASC:
        //     const sortedByDOBAsc = [...state.drivers.data].sort((a, b) => {
        //         const dateA = new Date(a.dob); // Supongamos que la fecha de nacimiento está en formato 'YYYY-MM-DD'
        //         const dateB = new Date(b.dob);
        //         return dateA - dateB;
        //       });
        //       return {
        //         ...state,
        //         drivers: {
        //           ...state.drivers,
        //           data: sortedByDOBAsc
        //         }};

        // case ORDERCARD_DOB_DESC:
        //     const sortedByDOBDesc = [...state.drivers.data].sort((a, b) => {
        //         const dateA = new Date(a.dob); // Supongamos que la fecha de nacimiento está en formato 'YYYY-MM-DD'
        //         const dateB = new Date(b.dob);
        //         return  dateB - dateA;
        //       });
        //       return {
        //         ...state,
        //         drivers: {
        //           ...state.drivers,
        //           data: sortedByDOBDesc
        //         }};  
            
        //case FILTER_TEAM:







        
            
       
        default:
            return {...state}
    }
}
export default reducer;