
import React from "react";
import SearchBar from "../SearchBar/SearchBar"; 
import { useSelector } from "react-redux/es/hooks/useSelector";
const Nav = () => {
  const searchBarData = useSelector((state) => state.searchBar);
  return (
    <nav>
      <h1>Tu Aplicación</h1>
      <div className="searchResults">
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
      <SearchBar /> 
    </nav>
  );
};

export default Nav;
