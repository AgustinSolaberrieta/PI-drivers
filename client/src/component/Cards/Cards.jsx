import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers  } from "../../Redux/action";
import Card from "../Card/Card";


const Cards = () => {
    const dispatch = useDispatch();
    const driver = useSelector((state) =>state.drivers.data || []);
    
    console.log(driver);
  
    useEffect(() => {
      dispatch(getDrivers());
    }, []);
  

  
    return (
      <div>
         <h1>Drivers</h1>
      <div>
      {
          driver.map((driver) => (
            <Card
              key={driver.id}
              id={driver.id}
              name={driver.name}
              surname={driver.surname}
              image={driver.image}
              teams={driver.teams}
            />
          ))
      }
      </div>
       
  
      </div>
    );
  };
  
  export default Cards;


 // const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 9;

//Paginado
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const driversToShow = drivers ? drivers.slice(startIndex, endIndex) : [];
    // const totalPages = Math.ceil(drivers ? drivers.length / itemsPerPage : 0);
  
    // const handlePageChange = (newPage) => {
    //   setCurrentPage(newPage);
    // };
  
    // const visiblePages = 3; // Número de botones visibles a la vez
  
    // // Calcula el rango de páginas para mostrar
    // const pageRangeStart = Math.max(currentPage - 1, 1);
    // const pageRangeEnd = Math.min(currentPage + visiblePages - 2, totalPages);
  
    // const handleOrderByNameAsc = () => {
    //   dispatch(orderDriversByNameAsc())
    // }
    // const handleOrderByNameDesc = () => {
    //   dispatch(orderDriversByNameDesc())
    // }
    // const handleOrderByDOBAsc = () => {
    //   dispatch(orderDriversByDOBAsc());
    // };
    // const handleOrderByDOBDesc = () => {
    //   dispatch(orderDriversByDOBDesc());
    // };


    {/* <div> <button onClick={handleOrderByNameAsc}>Ordenar por Nombre Ascendente</button>
         <button onClick={handleOrderByNameDesc}>Ordenar por Nombre Descendente </button>
         <button onClick={handleOrderByDOBAsc}>Ordenar por Fecha de Nacimiento Ascendente</button>
         <button onClick={handleOrderByDOBDesc}>Ordenar por Fecha de Nacimiento Descendente</button>

        </div> */}


         {/* <div className="pagination">
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
          )} */}
        {/* </div> */}