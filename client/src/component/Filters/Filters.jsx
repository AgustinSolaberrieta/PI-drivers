
import { useDispatch } from 'react-redux';
import { setOrderByAsc, setOrderByDesc, orderDriversByDOBAsc, orderDriversByDOBDesc } from "../../Redux/action";

const Filter = () => {
  const dispatch = useDispatch();

  const handleOrderByNameAsc = () => {
    dispatch(setOrderByAsc());
  };

  const handleOrderByNameDesc = () => {
    dispatch(setOrderByDesc());
  };

  const handleOrderByDOBAsc = () => {
      dispatch(orderDriversByDOBAsc());
    };
    const handleOrderByDOBDesc = () => {
      dispatch(orderDriversByDOBDesc());
    };

  return (
    <div>
      <button onClick={handleOrderByNameAsc}>
        Ordenar por Nombre Ascendente
      </button>
      <button onClick={handleOrderByNameDesc}>
        Ordenar por Nombre Descendente
      </button>
      <button onClick={handleOrderByDOBAsc}>Ordenar por Fecha de Nacimiento Ascendente</button>
      <button onClick={handleOrderByDOBDesc}>Ordenar por Fecha de Nacimiento Descendente</button>
    </div>
  );
};

export default Filter;
