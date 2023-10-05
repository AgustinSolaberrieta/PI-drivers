// // Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:
// // Nombre.
// // Apellido.
// // Nacionalidad.
// // Imagen.
// // Fecha de Nacimiento.
// // Descripción.
// // Escuderías.
// // Posibilidad de seleccionar/agregar varias escuderías en simultáneo.
// // Botón para dar de alta (crear) el nuevo driver.
// // [IMPORTANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del driver no pueda contener símbolos,etc.

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const endpoint = 'http://localhost:3001'


// const Form =  () => {
//     const navigate = useNavigate();

//     const [driver, setDriver] = useState({  
//             name: "",
//             surname: "",
//             nationality: "",
//             dob:  "",
//             image: "",
//             description: "",
//             teams: "",
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      
//         // Aquí puedes realizar validaciones adicionales antes de enviar los datos
      
//         try {
//           const response = await axios.post(`${endpoint}/drivers`, driver);
//           // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
//           console.log("Conductor creado con éxito:", response.data);
//           navigate(`/detail/${response.data.id}`);
//           // Puedes hacer más acciones aquí, como redirigir a otra página
//         } catch (error) {
//           // Maneja los errores, por ejemplo, muestra un mensaje de error
//           console.error("Error al crear conductor:", error.message);
//         }
//       };        

//     return(
//         <div>
//             <label htmlFor="name">Nombre</label>
//             <input  type="text" id="name" name="name" value={driver.name} onChange={(e) => setDriver({ ...driver, name: e.target.value })}/>
//             <hr/>
//             <label htmlFor="surname">Apellido</label>
//             <input  type="text" id="surname" name="surname" value={driver.surname} onChange={(e) => setDriver({ ...driver, surname: e.target.value })}/>
//             <hr/>
//             <label htmlFor="nationality">Nacionanlidad</label>
//             <input  type="text" id="nationality" name="nationality" value={driver.nationality} onChange={(e) => setDriver({ ...driver, nationality: e.target.value })}/>
           
//             <hr/>
//             <label htmlFor="dob">Fecha de nacimiento</label>
//             <input  type="date" id="dob" name="dob" value={driver.dob} onChange={(e) => setDriver({ ...driver, dob: e.target.value })}/>
           
//             <hr/>
//             <label htmlFor="image">Imagen:</label>
//             <input  type="text" id="image" name="image" value={driver.image} onChange={(e) => setDriver({ ...driver, image: e.target.value })}/>
           
//             <hr/>
//             <label htmlFor="description">Descripcion:</label>
//             <input  type="text" id="description" name="description" value={driver.description} onChange={(e) => setDriver({ ...driver, description: e.target.value })}/>
//             <hr/>
//             <label htmlFor="teams">Escuderías (separadas por comas)</label>
//            <input type="text"  id="teams" name="teams" value={driver.teams} onChange={(e) => setDriver({ ...driver, teams: e.target.value })}/>
//             <hr/>
//             <button onClick={handleSubmit}>Crear</button>

//         </div>
//     )
// }

// export default Form; 


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const endpoint = 'http://localhost:3001'

const Form = () => {
  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    name: "",
    surname: "",
    nationality: "",
    dob: "",
    image: "",
    description: "",
    teams: "", // Esto debe ser un equipo seleccionado en el dropdown
  });

  const [teams, setTeams] = useState([]); // Estado para almacenar la lista de equipos

  useEffect(() => {
    // Aquí obtén la lista de equipos desde el backend y actualiza el estado
    async function fetchTeams() {
      try {
        const response = await axios.get(`${endpoint}/teams`);
        setTeams(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de equipos:", error.message);
      }
    }

    fetchTeams();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${endpoint}/drivers`, driver);
      console.log("Conductor creado con éxito:", response.data);
      navigate(`/detail/${response.data.id}`);
    } catch (error) {
      console.error("Error al crear conductor:", error.message);
    }
  };

  return (
    <div>
      <label htmlFor="name">Nombre</label>
         <input  type="text" id="name" name="name" value={driver.name} onChange={(e) => setDriver({ ...driver, name: e.target.value })}/>
        <hr/>
      <label htmlFor="surname">Apellido</label>
          <input  type="text" id="surname" name="surname" value={driver.surname} onChange={(e) => setDriver({ ...driver, surname: e.target.value })}/>
       <hr/>
           <label htmlFor="nationality">Nacionanlidad</label>
           <input  type="text" id="nationality" name="nationality" value={driver.nationality} onChange={(e) => setDriver({ ...driver, nationality: e.target.value })}/>
          <hr/>
            <label htmlFor="dob">Fecha de nacimiento</label>
           <input  type="date" id="dob" name="dob" value={driver.dob} onChange={(e) => setDriver({ ...driver, dob: e.target.value })}/>
           
            <hr/>
           <label htmlFor="image">Imagen:</label>
           <input  type="text" id="image" name="image" value={driver.image} onChange={(e) => setDriver({ ...driver, image: e.target.value })}/>
           
           <hr/>
            <label htmlFor="description">Descripcion:</label>
            <input  type="text" id="description" name="description" value={driver.description} onChange={(e) => setDriver({ ...driver, description: e.target.value })}/>
             <hr/>
      <hr />
      <label htmlFor="teams">Escuderías</label>
      <select
        id="teams"
        name="teams"
        value={driver.teams}
        onChange={(e) => setDriver({ ...driver, teams: e.target.value })}
      >
        <option value="">Selecciona un equipo</option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      <hr />
      <button onClick={handleSubmit}>Crear</button>
    </div>
  );
};

export default Form;

        