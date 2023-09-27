// // 📍 POST | /drivers
// // Esta ruta recibirá todos los datos necesarios para crear un driver ++
// //y relacionarlo con sus teams solicitados.
// // Toda la información debe ser recibida por body.++
// // Debe crear un driver en la base de datos,
// // y este debe estar relacionado con sus teams indicados (al menos uno)

// // const {Teams, Driver, Drivers_Teams} = require("../db")


// // const postDrivers = async (req, res) => {

// //     try{
// //     const {name , surname , description , image , nationality , dob, teams } = req.body

// //     if (!name || !surname || !description || !image || !nationality || !dob || !teams) {
// //         res.status(404).send("Faltan datos para crear un driver")
// //         return
// //     }
// //      const [newDriver, created]= await Driver.create({
// //         where:{
// //             name,
// //             surname , 
// //             description ,
// //             image , 
// //             nationality , 
// //             dob},
        
// //         })

// //         if (!created) {
// //             res.status(400).send("No se puede crear el nuevo Driver")
// //             return
// //         }

// //         for (let teamName of teams) {
// //             const [teamInstance] = await Teams.findOrCreate({
// //                 where: { name: teamName }
// //             });
            
// //             await Drivers_Teams.create({
// //                 teamId: newDriver.id,
// //                 typeId: teamInstance.id
// //             });
// //         }
        
// //     res.status(200).json(newDriver)

// //  }catch (error){
// //     console.log(error.message);
// //     res.status(500).json({menssaje: "hplll"})
// //  }


// // }

// // module.exports={
// //     postDrivers,
// // }



// const { Teams, Driver, Drivers_Teams } = require("../db");

// const postDrivers = async (req, res) => {
//   try {
//     const { name, surname, description, image, nationality, dob, teams } = req.body;

//     if (!name || !surname || !description || !image || !nationality || !dob || !teams) {
//       return res.status(404).send("Faltan datos para crear un driver");
//     }

//     const [newDriver, created] = await Driver.create({
//       where: {
//         name,
//         surname,
//         description,
//         image,
//         nationality,
//         dob,
//       },
//       defaults: {
//         name,
//         surname,
//         description,
//         image,
//         nationality,
//         dob,
//       },
//     });

//     if (!created) {
//       return res.status(400).send("No se puede crear el nuevo Driver");
//     }

//     for (let teamName of teams) {
//       const [teamInstance] = await Teams.findOrCreate({
//         where: { name: teamName },
//       });

//       // Asegúrate de que "teamInstance" y "newDriver.id" sean válidos
//       if (teamInstance && newDriver && newDriver.id) {
//         await Drivers_Teams.create({
//           teamId: teamInstance.id,
//           typeId: newDriver.id,
//         });
//       } else {
//         // Maneja el caso donde "teamInstance" o "newDriver.id" no son válidos
//         return res.status(500).json({ mensaje: "Error al crear la relación entre conductor y equipo" });
//       }
//     }

//     return res.status(200).json(newDriver);
//   } catch (error) {
//     console.error("Error en la creación del conductor:", error);
//     return res.status(500).json({ mensaje: "Se produjo un error al crear el conductor" });
//   }
// };

// module.exports = {
//   postDrivers,
// };
