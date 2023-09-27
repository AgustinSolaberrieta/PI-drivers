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