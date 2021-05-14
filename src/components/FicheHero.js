import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const FicheHero = ({ name, description, photo, id }) => {
  return (
    <div>
      <div
        onClick={() => {
          if (Cookies.get("personnages favoris")) {
            let cookie = Cookies.get("personnages favoris");
            cookie = cookie + "_" + name;
            Cookies.set("personnages favoris", cookie, { expires: 50000 });
          } else {
            Cookies.set("personnages favoris", name, { expires: 50000 });
          }
        }}
      >
        <FontAwesomeIcon icon={["far", "heart"]} />
      </div>
      <div>
        <FontAwesomeIcon icon="heart" />
      </div>

      <Link to={`/personnage/${id}`}>
        <div>{name}</div>
        <div>
          <img src={photo} alt="" />
        </div>
        <div>{description}</div>
      </Link>
    </div>
  );
};

export default FicheHero;
