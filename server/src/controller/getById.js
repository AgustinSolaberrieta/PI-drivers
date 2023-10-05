const axios = require("axios")
const {Driver} = require('../db.js')
const {Teams}  = require("../db.js")
const URL = 'http://localhost:5000/drivers'

const getdriverdById = async (req,res) =>{
    try {

        const { id } = req.params;
        const UUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id);

        let dbid
        if (UUID) {
          dbid = await Driver.findOne({
          where: {id}, // si incluye los datos del eqipo dentro de Drivers(osea mi base de datos)
          include: { model: Teams, as: "Teams", attributes: ["name"]},//es de aca ->  Driver.belongsToMany(Teams,{through: "Drivers_Teams",as: "Teams"});
        })

        console.log("aqui",dbid)
        // const list = dbid.Teams.map(team=> team.name);

        // dbid = {...dbid.toJSON(), list}
      
        res.status(200).json(dbid)
        }

        // si no esta en mi bd lo busco en mi api
        const { data }= await axios.get(`${URL}/${id}`);

     // filtra mi api para que no me lleve a mi front datos q no son necesarios
        const filtradData = {
          id: data.id,
          name: data.name.forename,
          surname: data.name.surname,
          nationality: data.nationality,
          image: data.image.url,
          description: data.description,
          dob: data.dob,
          teams: data.teams,
      };
        res.status(200).json(filtradData)
  
    } catch (error) {
      console.log(error.message);
        return res.status(500).json({error: error.message}) 
    }

}

module.exports={getdriverdById}



// if (UUID) {
//   const dbid = await Driver.findOne({
//   where: {id},
//   // si incluye los datos del eqipo dentro de Drivers(osea mi base de datos)
//    include: { model: Teams, attributes:["name"], as: "Teams"},//es de aca ->  Driver.belongsToMany(Teams,{through: "Drivers_Teams",as: "Teams"});

// })
// if (dbid) {
//  const teams = Driver.teams.map(teams=> teams.name);

//  res.status(200).json({driver: dbid, teams}) 
// } else {
//   // Handle the case where the driver is not found in the database
//   res.status(404).json({ error: "Driver not found in the database" });
// }