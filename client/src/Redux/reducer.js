import { CLEAN_DETAIL, GET_DRIVERS,GET_DRIVERS_DETAIL, SEARCHBAR, SET_ORDER_BY_ASC, SET_ORDER_BY_DESC, ORDERCARD_DOB_ASC, ORDERCARD_DOB_DESC, CREATE_DRIVER, GET_TEAM} from "./action-types";

const initialState={
    drivers: [],
    driversDetail : {},
    teams:[]
    
    
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

        case CREATE_DRIVER:
          return{
            ...state,
            drivers: [...state.drivers, action.payload.data]

          }  
          
          case GET_TEAM :
            return{
              ...state,
              teams: action.payload
            }  

            case SET_ORDER_BY_ASC:
                const sortedByNameAsc = [...state.drivers.data].sort((a, b)=>{
                            return a.name.localeCompare(b.name)
                        }); // unexpected lexical declaration in case block
                        return {
                            ...state,
                            drivers: {
                              ...state.drivers,
                              data: sortedByNameAsc
                            }
                          };
              case SET_ORDER_BY_DESC:
                const sortedByNameDesc = [...state.drivers.data].sort((a, b)=>{
                            return b.name.localeCompare(a.name)
                        }); 
                        return {
                            ...state,
                            drivers: {
                              ...state.drivers,
                              data: sortedByNameDesc
                            }
                };    

        case ORDERCARD_DOB_ASC:
            const sortedByDOBAsc = [...state.drivers.data].sort((a, b) => {
                const dateA = new Date(a.dob); // Supongamos que la fecha de nacimiento está en formato 'YYYY-MM-DD'
                const dateB = new Date(b.dob);
                return dateA - dateB;
              });
              return {
                ...state,
                drivers: {
                  ...state.drivers,
                  data: sortedByDOBAsc
                }};

        case ORDERCARD_DOB_DESC:
            const sortedByDOBDesc = [...state.drivers.data].sort((a, b) => {
                const dateA = new Date(a.dob); // Supongamos que la fecha de nacimiento está en formato 'YYYY-MM-DD'
                const dateB = new Date(b.dob);
                return  dateB - dateA;
              });
              return {
                ...state,
                drivers: {
                  ...state.drivers,
                  data: sortedByDOBDesc
                }};  
            
        // //case FILTER_TEAM:







        
            
       
        default:
            return {...state}
    }
}
export default reducer;