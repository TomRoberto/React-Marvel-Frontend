import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";

const FicheHero = ({ name, description, photo, id, favable }) => {
  const [isFav, setIsFav] = useState(
    new RegExp(id).test(Cookies.get("personnages favoris")) || false
  );

  const handleClickFav = () => {
    if (Cookies.get("personnages favoris")) {
      let cookie = Cookies.get("personnages favoris");
      cookie = `${cookie};_;${name};-;${description};-;${photo};-;${id}`;
      Cookies.set("personnages favoris", cookie, { expires: 50000 });
      setIsFav(true);
    } else {
      Cookies.set(
        "personnages favoris",
        `${name};-;${description};-;${photo};-;${id}`,
        { expires: 50000 }
      );
      setIsFav(true);
    }
  };

  const handleClickUnfav = () => {
    let cookie = Cookies.get("personnages favoris");
    let cookieTab = cookie.split(";_;");
    const index = cookieTab.indexOf(
      `${name};-;${description};-;${photo};-;${id}`
    );
    cookieTab.splice(index, 1);
    const newCookie = cookieTab.join(";_;");
    Cookies.set("personnages favoris", newCookie, { expires: 50000 });
    setIsFav(false);
    if (Cookies.get("personnages favoris") === "") {
      Cookies.remove("personnages favoris");
    }
  };

  return (
    <div className="hero-fiche">
      <div className="heart-div">
        {favable &&
          (isFav ? (
            <div className="fav-icons" onClick={handleClickUnfav}>
              <FontAwesomeIcon icon="heart" />
            </div>
          ) : (
            <div className="fav-icons" onClick={handleClickFav}>
              <FontAwesomeIcon icon={["far", "heart"]} />
            </div>
          ))}
      </div>

      <div className="hero-infos">
        <Link className="link-hero" to={`/personnage/${id}`}>
          <div className="name-hero">{name}</div>
          <div className="img-hero-container">
            <img src={photo} alt="" />
          </div>
          <div className="description-hero">{description}</div>
        </Link>
      </div>
    </div>
  );
};

export default FicheHero;
