import { Link } from 'react-router-dom';
import "./Card.css"

const Card = ({ id, name, image, surname, teams }) => {
  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <h2 className="card-title">{name} {surname}</h2>
      </Link>
      <img
        src={image}
        alt={name}
        className="card-image"
      />
      <h2 className="card-teams">{teams}</h2>
    </div>
  );
}

export default Card;
