
import { GET_DRIVERS , GET_DRIVERS_DETAIL, CLEAN_DETAIL, SET_CURRENT_PAGE, SEARCHBAR, ORDERCARDS_NAME_ASC, ORDERCARDS_NAME_DESC, ORDERCARD_DOB_ASC, ORDERCARD_DOB_DESC} from "./action-types";
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
  return async function (dispatch) {
    try {
      const buscoporName = await axios.get(`${endpoint}/drivers/search?name=${name}`);
      console.log(buscoporName.data);

      if (!buscoporName.data || buscoporName.data.length === 0) {
        alert('No se encontraron drivers con este nombre');
      } else {
        return dispatch({
          type: SEARCHBAR,
          payload: buscoporName.data,
        });
      }
    } catch (error) {
      console.error("Error en la búsqueda:", error);
      // Puedes manejar el error aquí si es necesario
    }
  };
};

export const orderDriversByNameAsc = () => ({
  type: ORDERCARDS_NAME_ASC
})

export const orderDriversByNameDesc = () => ({
  type: ORDERCARDS_NAME_DESC
})

export const orderDriversByDOBAsc = () => {
  return { type: ORDERCARD_DOB_ASC};
};

export const  orderDriversByDOBDesc = () => {
  return { type: ORDERCARD_DOB_DESC};
};
