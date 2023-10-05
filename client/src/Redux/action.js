import { GET_DRIVERS , GET_DRIVERS_DETAIL, CLEAN_DETAIL, SET_CURRENT_PAGE, SEARCHBAR, SET_ORDER_BY_ASC,SET_ORDER_BY_DESC, ORDERCARD_DOB_ASC, ORDERCARD_DOB_DESC, CREATE_DRIVER, GET_TEAM} from "./action-types";
import axios from "axios";
const endpoint = 'http://localhost:3001'

export const getDrivers = () => {
    return async (dispatch) => {
       const data = await axios.get(`${endpoint}/drivers`)
       
      
       if (!data) {
        throw Error("Salio mal")
       }
      return dispatch({ 
        type:GET_DRIVERS,
        payload: data
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
      console.log(buscoporName);

      if (!buscoporName.data || buscoporName.data.length === 0) {
        alert('No se encontraron drivers con este nombre');
      } else {
        return dispatch({
          type: SEARCHBAR,
          payload: buscoporName,
        });
      }
    } catch (error) {
      console.error("Error en la búsqueda:", error);
      // Puedes manejar el error aquí si es necesario
    }
  };
 };

 export const createDriver = (driver) => {
  return async function(dispatch){
    try{
      console.log("llega");
      const response = await axios.post(`${endpoint}/drivers`,{...driver})

      return dispatch({type: CREATE_DRIVER, payload:response})

    }catch (error){
      console.log(error.message);

    }
  }
 }

 export const getTeams =  () => {
  return async (dispatch) => {
      try {
          const {data} = await axios(`${endpoint}/teams`);
          return dispatch({type: GET_TEAM, payload: data})

      } catch (error) {
          console.log(error.message);
      }
  }
}

export const  setOrderByAsc = () => ({
    type: SET_ORDER_BY_ASC,
  })

 export const  setOrderByDesc = () => ({
    type: SET_ORDER_BY_DESC,
  })



export const orderDriversByDOBAsc = () => {
  return { type: ORDERCARD_DOB_ASC};
};

export const  orderDriversByDOBDesc = () => {
  return { type: ORDERCARD_DOB_DESC};
};

// export const filterTeam = () => {
//   return async function (dispatch){
//     const buscoporTeams= await axios.get(`${endpoint}/teams`)
  
//     if(!buscoporTeams){
//      throw Error("Salio mal")
//     }
//     return dispatch({
//      type: FILTER_TEAM , 
//      payload: buscoporTeams.data,
     
//    }
   
//  }

 //}