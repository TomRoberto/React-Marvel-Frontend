import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";

const FicheComic = ({ photo, name, description, favable, id }) => {
  const [isFav, setIsFav] = useState(
    new RegExp(id).test(Cookies.get("comics favoris")) || false
  );

  const handleClickFav = () => {
    if (Cookies.get("comics favoris")) {
      let cookie = Cookies.get("comics favoris");
      cookie = `${cookie};_;${name};-;${description};-;${photo};-;${id}`;
      Cookies.set("comics favoris", cookie, { expires: 50000 });
      setIsFav(true);
    } else {
      Cookies.set(
        "comics favoris",
        `${name};-;${description};-;${photo};-;${id}`,
        {
          expires: 50000,
        }
      );
      setIsFav(true);
    }
  };

  const handleClickUnfav = () => {
    let cookie = Cookies.get("comics favoris");
    let cookieTab = cookie.split(";_;");
    const index = cookieTab.indexOf(
      `${name};-;${description};-;${photo};-;${id}`
    );
    cookieTab.splice(index, 1);
    const newCookie = cookieTab.join(";_;");
    Cookies.set("comics favoris", newCookie, { expires: 50000 });
    setIsFav(false);
    if (Cookies.get("comics favoris") === "") {
      Cookies.remove("comics favoris");
    }
  };

  return (
    <div className="comics-fiche">
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

      <div className="comics-infos">
        <h3 className="name-comics">{name}</h3>
        <div className="img-comics-container">
          <img src={photo} alt="" />
        </div>
        {description !== "null" && (
          <p className="description-comics">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FicheComic;
