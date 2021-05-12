import { Link } from "react-router-dom";

const FicheHero = ({ name, description, photo, id }) => {
  return (
    <Link to={`/personnage/${id}`}>
      <div>{name}</div>
      <div>
        <img src={photo} alt="" />
      </div>
      <div>{description}</div>
    </Link>
  );
};

export default FicheHero;
