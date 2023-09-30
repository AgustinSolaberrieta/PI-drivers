
import { GET_DRIVERS, GET_DRIVERS_DETAIL } from "./action-types";
import axios from "axios";
const endpoint = 'http://localhost:3001'

export const getDrivers = () => {
    return async function (dispatch) {
       const drivers= await axios.get(`${endpoint}/drivers`)
       ;console.log(drivers);
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
    return function (dispach){
        axios.get(`http://localhost:5000/drivers/${id}`)
       .then(response => response.data)
       .then(data => dispach({type: GET_DRIVERS_DETAIL , payload: data }))
    }

}