const axios = require("axios")
const {Driver} = require('../db.js')
const {Teams}  = require("../db.js")
const URL = 'http://localhost:5000/drivers'

const getdriverdById = async (req,res) =>{
    try {

        const { id } = req.params;
        const UUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        id
      );

        if (UUID) {
          const dbid = await Driver.findOne({
          where: {id},
          // si incluye los datos del eqipo dentro de Drivers(osea mi base de datos)
          include: [{ model: Teams, as: "Teams" }],//es de aca ->  Driver.belongsToMany(Teams,{through: "Drivers_Teams",as: "Teams"});
        });
         res.status(200).json(dbid)
        }

       
        // si no esta en mi bd lo busco en mi api
        const { data }= await axios.get(`${URL}/${id}`);
        res.status(200).json(data)
    
       
         
    
    
    } catch (error) {
      console.log(error.message);
        return res.status(500).json({error: error.message}) 
    }

}

module.exports={getdriverdById,}