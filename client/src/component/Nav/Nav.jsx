
import Filter from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar"; 
const Nav = () => {

  return (
    <nav>
      <h1>Tu Aplicación</h1>
      
      <SearchBar /> 
      <Filter/>
    </nav>
  );
};

export default Nav;
