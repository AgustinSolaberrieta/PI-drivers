import {Link} from 'react-router-dom'

const Card = ({id, name, image, surname,  teams} ) =>{
return(
    <div>
        <Link to={`/detail/${id}`} ><h2>{name} {surname}</h2></Link> 
        <img src={image}  alt={name} style={{ width: '250px', height: '200px' }} // Cambia '100px' a la dimensión deseada
/>
        <h2>{teams}</h2>
    </div>
)

}

export default Card