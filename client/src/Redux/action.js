
import { GET_DRIVERS , GET_DRIVERS_DETAIL, CLEAN_DETAIL} from "./action-types";
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
     console.log(buscoporId.data);
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