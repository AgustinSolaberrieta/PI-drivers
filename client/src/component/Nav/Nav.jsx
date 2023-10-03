
// Nav.js
import React from "react";
import SearchBar from "../SearchBar/SearchBar"; // Importa el componente SearchBar
import { useSelector } from "react-redux/es/hooks/useSelector";
const Nav = () => {
  const searchBarData = useSelector((state) => state.searchBar);
  return (
    <nav>
      <h1>Tu Aplicación</h1>
      <div className="searchResults">
        {/* Utiliza searchBarData para mostrar los resultados o un mensaje de carga */}
        {searchBarData ? (
          searchBarData.map((driver) => (
            <div key={driver.id} className="driverCard">
              <h2>{driver.name.forename} {driver.name.surname}</h2>
              <img src={driver.image.url} alt={`${driver.name.forename} ${driver.name.surname}`} />
              <p>{driver.description}</p>
              {/* Renderiza otros datos que desees mostrar */}
            </div>
          ))
        ) : (
          <p>Cargando resultados...</p>
        )}
      </div>
      <SearchBar /> {/* Agrega el componente SearchBar aquí */}
    </nav>
  );
};

export default Nav;
