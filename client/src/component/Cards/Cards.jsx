import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from "../../Redux/action";
import Card from "../Card/Card";

const Cards = () => {
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.drivers.data || []); // Obtiene los datos de los conductores desde Redux
  const driversPerPage = 9; // Número de conductores por página
  const [currentPage, setCurrentPage] = useState(1); // Página actual, comienza en la página 1

  useEffect(() => {
    // Al cargar el componente, dispara la acción para obtener los conductores
    dispatch(getDrivers());
  }, [dispatch]);

  // Calcula el índice del último conductor en la página actual
  const indexOfLastDriver = currentPage * driversPerPage;

  // Calcula el índice del primer conductor en la página actual
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;

  // Obtiene los conductores que se mostrarán en la página actual
  const currentDrivers = driver.slice(indexOfFirstDriver, indexOfLastDriver);

  return (
    <div>
      <h1>Drivers</h1>
      <div>
        {/* Mapea y muestra los conductores actuales como componentes "Card" */}
        {currentDrivers.map((driver) => (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            surname={driver.surname}
            image={driver.image}
            teams={driver.teams}
          />
        ))}
      </div>

      {/* Botones de paginación */}
      <div className="pagination">
        {/* Botón "Anterior" que disminuye la página actual */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="page-link"
          disabled={currentPage === 1} // Deshabilitado en la primera página
        >
          Anterior
        </button>

        {/* Botón "Siguiente" que aumenta la página actual */}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="page-link"
          disabled={currentPage === Math.ceil(driver.length / driversPerPage)} // Deshabilitado en la última página
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Cards;
