import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from "../../Redux/action";
import Card from "../Card/Card";

// const Cards = () => {
//     const dispatch = useDispatch();
//     const drivers = useSelector(state => state.drivers.data);

//     useEffect(() => {
//         dispatch(getDrivers());
//     }, []);

//     return (
//         <div>
//             <h1>Drivers</h1>
//              {drivers ? (
//             drivers.map((driver) => (
//                 <Card
//                     key={driver.id}
//                     id={driver.id}
//                     name={driver.name}
//                     surname={driver.surname}
//                     image={driver.image}
//                     teams={driver.teams}
//                 />
//             ))
//         ) : (
//             <p>Cargando conductores...</p>
//         )}
//         </div>
//     );
// };

// export default Cards;




const Cards = () => {
    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.drivers.data);
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
  
    useEffect(() => {
      dispatch(getDrivers());
    }, []);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const driversToShow = drivers ? drivers.slice(startIndex, endIndex) : [];
    const totalPages = Math.ceil(drivers ? drivers.length / itemsPerPage : 0);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    const visiblePages = 3; // Número de botones visibles a la vez
  
    // Calcula el rango de páginas para mostrar
    const pageRangeStart = Math.max(currentPage - 1, 1);
    const pageRangeEnd = Math.min(currentPage + visiblePages - 2, totalPages);
  
    return (
      <div>
        <h1>Drivers</h1>
        {drivers ? (
          driversToShow.map((driver) => (
            <Card
              key={driver.id}
              id={driver.id}
              name={driver.name}
              surname={driver.surname}
              image={driver.image}
              teams={driver.teams}
            />
          ))
        ) : (
          <p>Cargando conductores...</p>
        )}
  
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          )}
          {Array.from({ length: pageRangeEnd - pageRangeStart + 1 }, (_, index) => (
            <button
              key={index + pageRangeStart}
              onClick={() => handlePageChange(index + pageRangeStart)}
              className={currentPage === index + pageRangeStart ? "active" : ""}
            >
              {index + pageRangeStart}
            </button>
          ))}
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          )}
        </div>
      </div>
    );
  };
  
  export default Cards;