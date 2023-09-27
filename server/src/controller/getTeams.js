/*GET | /teams
Obtiene un arreglo con todos los teams existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí. */


const {Teams}= require("../db");
const axios = require("axios")
const URL = "http://localhost:5000/drivers";


const getTeams = async(req, res) =>{
 try {
    const teams = await Teams.findAll();

    if (teams !== undefined && teams !== null) {
        return res.status(200).json(teams)
    }

    const respuesta= await axios(URL)
    const respType= respuesta.data.results


    const saveType= await Teams.bulkCreate(respType)
   
    res.status(200).json(saveType)


    
 } catch (error) {
    console.log(error.message);
        return res.status(500).json({error: error.message}) 
 }
    

}

module.exports={
    getTeams,
}


// const getTeams= async(req, res) =>{
//     try {
//          const {teams} = req.body
         
//         // Me fijo si la base de datos está vacía
//        const teamsEnDB = await Teams.findAll();

//        //si tiene algo me lo devuelve 
//        if (teamsEnDB !== undefined && teamsEnDB !== null) {
//                 return res.status(200).json(teamsEnDB)
//             }
//         // SI MI BASE DE DATOS ESTA VACIA ME TENGO QUE TRARER A LOS TEAMS DE MI API 
//         const response = await axios(`${URL}/${teams}`); 
//         // Supongamos que la respuesta es un arreglo de objetos que contienen información de equipos
//        const data = response.data;

//       // Filtra los equipos de los datos obtenidos
//         teams = data.map(driver => driver.teams);


//     } catch (error) {
//         console.log(error.message);
//       return res.status(500).json({error: error.message})   
//     }
// }






