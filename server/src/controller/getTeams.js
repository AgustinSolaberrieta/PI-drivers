/*GET | /teams
Obtiene un arreglo con todos los teams existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí. */

const { where } = require("sequelize");
const {Teams}= require("../db");
const axios = require("axios")
const URL = "http://localhost:5000/drivers";

const getTeams= async(req, res) =>{
    try {
        // Me fijo si la base de datos está vacía
       const teamsEnDB = await Teams.findAll();
      //  flatmap
       //si tiene algo me lo devuelve 
       if (teamsEnDB.length > 0) {
                return res.status(201).json(teamsEnDB)
            }

      const response = await axios(URL);    
       const dataTeams = response.data;
      
        // console.log(typeof dataTeams);
       const mapeo = dataTeams.map(team => team.teams)
       const newmapeo= mapeo.flatMap(element =>{
        if (element) {
          let arry = element.split(',');
          return arry;
        } else {
          return [];
        }})
        const newnewmapeo= newmapeo.flatMap(elemento => elemento.trim())

       const equiposUnicos= [...new Set(newnewmapeo)]
    //await Teams.bulkCreate(equiposUnicos.map(name => ({ name })));


       // const gusrdoenbasededatos= await Teams.bulkCreate(equiposUnicos)
     
      // console.log(gusrdoenbasededatos);

        return res.status(200).json(equiposUnicos)


    } catch (error) {
        console.log(error.message);
      return res.status(500).json({error: error.message})   
    }
}


module.exports={
    getTeams,
}
