const axios = require("axios")
const URL= 'http://localhost:5000/drivers'
const img = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fus.123rf.com%2F450wm%2Fms10%2Fms101604%2Fms10160400101%2F55399724-coche-de-f%25C3%25B3rmula-aislado-vector-de-ilustraci%25C3%25B3n-dibujo-carreras-asbtract-silueta-del-coche.jpg&tbnid=tEGPXJq5t80XaM&vet=12ahUKEwii2paO7MaBAxX0GbkGHa1-DGIQMygKegQIARBz..i&imgrefurl=https%3A%2F%2Fes.123rf.com%2Fphoto_55399724_coche-de-f%25C3%25B3rmula-aislado-vector-de-ilustraci%25C3%25B3n-dibujo-carreras-asbtract-silueta-del-coche.html&docid=o8SYXFY60LK8EM&w=450&h=241&q=conductor%20de%20auto%20anonimo%20%20%20de%20formila%201silueta&ved=2ahUKEwii2paO7MaBAxX0GbkGHa1-DGIQMygKegQIARBz"



const getdriver = async (req, res) =>{
    try {
        const drivers = await axios(URL);
        const driversData = drivers.data
        console.log(drivers.data);

        driversData.forEach(conductor => {
          if (!conductor.image || !conductor.image.url) {
            // Si el conductor no tiene una imagen, asigna una por defecto
            conductor.image = {
              url: img
            };
          }
        });

        res.status(200).json(driversData)
  

    } catch (error) {
      return res.status(500).json({error: error.message}) 
        
    }
}

module.exports= {getdriver}