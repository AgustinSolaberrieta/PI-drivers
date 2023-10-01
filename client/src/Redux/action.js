
import { GET_DRIVERS , GET_DRIVERS_DETAIL} from "./action-types";
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
    return async function (dispach){
       const buscoporId= await axios.get(`${endpoint}/drivers/${id}`)
       if(!buscoporId){
        throw Error("Salio mal")
       }
       return dispach({
        type: GET_DRIVERS_DETAIL , 
        payload: buscoporId
      })
    }

}