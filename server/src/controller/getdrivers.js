const axios = require("axios")
const URL= 'http://localhost:5000/drivers'
const img = "https://previews.123rf.com/images/derocz/derocz1502/derocz150200005/36251412-carreras-de-coches-de-f%C3%B3rmula-uno-negro-ilustraci%C3%B3n-contorno-vector.jpg"



const getdriver = async (req, res) =>{
    try {
      const allDriversResponse = await axios.get(URL);
        const allDriversData = allDriversResponse.data;

        const traigoData = allDriversData.map(driver => ({
            id: driver.id,
            name: driver.name.forename,
            surname: driver.name.surname,
            image: driver.image.url || img, // Asigna la imagen predeterminada si no hay una URL de imagen
            teams: driver.teams,
            dob: driver.dob
        }));

        res.status(200).json(traigoData);
    } catch (error) {
      return res.status(500).send("No existen drivers") 
        
    }
}

module.exports= {getdriver}