// const axios = require('axios');
// const { Driver } = require('../db.js');

// const URL = 'http://localhost:5000/drivers?name.forename='

// const getDriversByName = async (req, res) => {

//   try {
//     const { name } = req.query.toLowerCase();
//       const dbid = await Driver.findOne({
//         where: {name}
//       });

//      if(dbid){
//        res.status(200).json(dbid)
//       } else {
        
//         return res.status(404).json({ error: 'Conductor no encontrado' });
//       }
    
//     const { data }= await axios.get(`${URL}${name}&limit=15`);

//     if (data) {
//        res.status(200).json(data)
//     }  
//     return res.status(404).json({ error: 'Conductor no encontrado' });
    
//   } catch (error) {
   
//     res.status(500).json(error.message);
//   }
// };

// module.exports = { getDriversByName };



// const axios = require('axios');
// const { Driver } = require('../db.js');

// const API_URL = 'http://localhost:5000/drivers';

// const getDriversByName = async (req, res) => {
//   try {
//     const { name } = req.query;
//     const lowerCaseName = name.toLowerCase();

//     // Buscar en la base de datos
//     const dbDriver = await Driver.findOne({
//       where: {
//         '$name.forename$': lowerCaseName,
//       },
//     });

//     if (dbDriver) {
//       res.status(200).json(dbDriver);
//     } else {
//       // Si no se encuentra en la base de datos, buscar en la API externa
//       const response = await axios.get(API_URL, {
//         params: {
//           'name.forename': lowerCaseName,
//           limit: 1,
//         },
//       });

//       if (response.data) {
//         res.status(200).json(response.data);
//       } else {
//         res.status(404).json({ error: 'Conductor no encontrado' });
//       }
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };

// module.exports = { getDriversByName };