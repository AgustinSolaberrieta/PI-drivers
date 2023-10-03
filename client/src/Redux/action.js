
import { GET_DRIVERS , GET_DRIVERS_DETAIL, CLEAN_DETAIL, SET_CURRENT_PAGE, SEARCHBAR} from "./action-types";
import axios from "axios";
const endpoint = 'http://localhost:3001'

export const getDrivers = () => {
    return async function (dispatch) {
       const drivers= await axios.get(`${endpoint}/drivers`)
       if (!drivers) {
        throw Error("Salio mal")
       }
      return dispatch({ 
        type:GET_DRIVERS,
        payload: drivers
      })
    
    }
}


export const getDriversDetail = (id) => {
    return async function (dispatch){
       const buscoporId= await axios.get(`${endpoint}/drivers/${id}`)
     
       if(!buscoporId){
        throw Error("Salio mal")
       }
       return dispatch({
        type: GET_DRIVERS_DETAIL , 
        payload: buscoporId.data,
        
      })
      
    }

}


export const cleanDetail= () => {
  return {type: CLEAN_DETAIL}
}

//http://localhost:3001/drivers/search?name=Jean
export const setCurrentPage = (page) =>({
  type: SET_CURRENT_PAGE,
  payload: page,
})

export const searchBar = (name) => {
  return async function (dispatch){
     const buscoporName= await axios.get(`${endpoint}/drivers/search?name=${name}`)
   console.log(buscoporName.data);
     if(!buscoporName){
      throw Error("Salio mal")
     }
     return dispatch({
      type: SEARCHBAR , 
      payload: buscoporName.data,
      
    })
    
  }

}