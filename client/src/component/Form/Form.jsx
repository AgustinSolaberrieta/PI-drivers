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


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../Redux/action";
const endpoint = 'http://localhost:3001'

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const apiteams = useSelector(state => state.teams)
  
  useEffect(()=>{
    dispatch(getTeams())
  }, [])

  const [driver, setDriver] = useState({
    name: "",
    surname: "",
    nationality: "",
    dob: "",
    image: "",
    description: "",
    teams: [], // Esto debe ser un equipo seleccionado en el dropdown
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${endpoint}/drivers`, driver);
      console.log("Conductor creado con éxito:", response.data);
      navigate(`/detail/${response.data.id}`);
      return
    } catch (error) {
      console.error("Error al crear conductor:", error.message);
    }
  };

  const handleTeamChange = (event) => {
    const teamsName = event.target.value;
    const isCheked = event.target.checked;

    let updateDriver;

    if (isCheked) {
      updateDriver = [...driver.teams, teamsName]; 
    } else {
      updateDriver = driver.teams.filter((team) => team !== teamsName); 
    }

    setDriver({ ...driver, teams: updateDriver }); 
    console.log(updateDriver);

  }
 
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
      
      {apiteams.map((team)=> {
        return(
          <div key={team.id}>
             <input
              type="checkbox"
              name={team.name}
              value={team.name}
              checked={driver.teams.includes(team.name)}
              onChange={handleTeamChange} 
              />
              <span name={team.name}>{team.name}</span>
          </div>
        )
      })}
      <hr />
      <button onClick={handleSubmit}>Crear</button>
    </div>
  );
};

export default Form;

         /* <select
        id="teams"
        name="teams"
        value={driver.teams}
        onChange={(e) =>{ 
          setDriver({ ...driver, teams: e.target.value });
          console.log("Nombre del equipo actualizado:", e.target.value);
        }}
      >
        
        <option value="">Selecciona un equipo</option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>  */