// const axios= require("axios")
// const URL = 'http://localhost:5000/drivers'


// const  getdriversByID = async (request, response)=>{
//     try {
//       const { id } = request.params
  
//       const { data } = await axios(`${URL}${id}`)
     
  
//       // let character = new Object;
//      if(!data.name) throw new Error(`Faltan datos del personaje con Id: ${id}`)
//           if(data){ 
//             driver = {
//             id : data.id,
//             name: data.name.forename,
//             surname: data.name.surname,
//             dob: data.dob,
//             nationality: data.origin.name,
//             description: data.description,
//             image: data.image,
            
//           }
//               return response.status(200).send(driver)
//           }
       
  
//     }catch (error) {
//       return error.message.includes('ID')
//      ? response.status(404).send(error.message)
//       :response.status(500).send(error.response.data.error)
//             // return response.status(500).send(JSON.stringify())
//         }
  
//   } 
  
//   module.exports = { getdriversByID} ;
  
  