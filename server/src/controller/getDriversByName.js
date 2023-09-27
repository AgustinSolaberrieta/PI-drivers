// // Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
// // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// // Si no existe el driver, debe mostrar un mensaje adecuado.
// // Debe buscar tanto los de la API como los de la base de dato
// const axios = require('axios');
// const { Driver } = require('../db.js');

// const URL = 'http://localhost:5000/drivers?name.forename='

// const getDriversByName = async (req, res) => {

//   try {
//     const { name } = req.query.name.toLowerCase();
//       const dbid = await Driver.findOne({
//         where: {'$name.forename$':name}
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
//     // Obtén el nombre de la consulta y conviértelo a minúsculas
//     const { name } = req.query;
//     const nameLower = name.toLowerCase();

//     // Busca en la base de datos
//     const dbDriver = await Driver.findOne({
//       where: {
//         '$name.forename$': name,
//       },
//     });

//     if (dbDriver) {
//     //   Si se encuentra en la base de datos, devuelve el resultado
//       return res.status(200).json(dbDriver);
//     }

//     // Si no se encuentra en la base de datos, busca en la API externa
//     const response = await axios.get(`${URL}/${name}`, {
//       params: {
//         'name.forename': nameLower,
//         limit: 15,
//       },
//     });

//     if (response.data.length > 0) {
//     //   Si se encuentra en la API externa, devuelve el resultado
//       return res.status(200).json({mensaaje: "hahhah"});
//     }

//     // Si no se encuentra en ningún lugar, devuelve un mensaje de error
//     return res.status(404).json({ error: 'Conductor no encontrado' });
//   } catch (error) {
//     // Maneja los errores
//     return res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };

// module.exports = { getDriversByName };
