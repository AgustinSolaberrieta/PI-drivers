import  { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBar } from "../../Redux/action";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // Función para manejar cambios en el campo de entrada
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchBar(name)); // Llama a la acción searchBar con el término de búsqueda
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Agrega el campo de entrada y conecta la función handleChange */}
      <input
        type="text"
        placeholder="Buscar conductores por nombre..."
        value={name}
        onChange={handleChange} // Conecta la función handleChange al campo de entrada
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;