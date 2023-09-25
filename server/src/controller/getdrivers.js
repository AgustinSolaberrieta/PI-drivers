const axios = require("axios")
const URL= 'http://localhost:5000/drivers'



const getdriver = async (req, res) =>{
    try {
        const drivers = await axios(URL); //recuperar todos los registros de una tabla
    
         // Itera sobre los conductores y añade una imagen por defecto si no tienen imagen
    const driversWithDefaultImage = drivers.map(driver => {
        if (!driver.image) {
            //CAMBIAR IMAGEN 
          driver.image = 'https://previews.123rf.com/images/derocz/derocz1602/derocz160200034/53446887-f%C3%B3rmula-uno-conductor-y-las-carreras-de-coches-ilustraci%C3%B3n-vector.jpg';
        }
        return driver;
      });

      res.json(driversWithDefaultImage);

    } catch (error) {
        console.error('Error al obtener los conductores:', error);
       res.status(500).json({message: "Error"}) 
    }
}

module.exports= getdriver