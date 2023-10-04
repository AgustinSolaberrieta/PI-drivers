
import { Link } from "react-router-dom";
import Filter from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar"; 
const Nav = () => {

  return (
    <nav>
      <h1>Tu Aplicación</h1>
      
      <SearchBar /> 
      <Filter/>
      <button className='Boton2'>
          <Link to='/create'>Nuevo Driver</Link>
        </button>
    </nav>
  );
};

export default Nav;
