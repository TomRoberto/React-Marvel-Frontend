import Cookies from "js-cookie";
import FicheHero from "../components/FicheHero";
import FicheComic from "../components/FicheComic";

const Favoris = () => {
  let tabCookie1 = Cookies.get("personnages favoris");
  if (tabCookie1) {
    tabCookie1 = tabCookie1.split("_");
    for (let i = 0; i < tabCookie1.length; i++) {
      tabCookie1[i] = tabCookie1[i].split(";-;");
    }
  }

  let tabCookie2 = Cookies.get("comics favoris");
  if (tabCookie2) {
    tabCookie2 = tabCookie2.split("_");
    for (let i = 0; i < tabCookie2.length; i++) {
      tabCookie2[i] = tabCookie2[i].split(";-;");
    }
  }

  return (
    <div className="container">
      <div>
        <div className="favoris-p-a">
          {" "}
          <p className="favoris-p">Vos personnages favoris:</p>
          <a href="#comics">Aller directement à vos comics favoris</a>
        </div>

        {tabCookie1 && (
          <div className="fiches-hero">
            {tabCookie1.map((elem, index) => {
              return (
                <FicheHero
                  favable={false}
                  name={elem[0]}
                  description={elem[1]}
                  photo={elem[2]}
                  id={elem[3]}
                  key={elem[3]}
                />
              );
            })}
          </div>
        )}
      </div>
      <div id="comics">
        <p className="favoris-p">Vos comics favoris:</p>{" "}
        {tabCookie2 && (
          <div className="fiches-comics">
            {tabCookie2.map((elem, index) => {
              return (
                <FicheComic
                  favable={false}
                  name={elem[0]}
                  description={elem[1]}
                  photo={elem[2]}
                  id={elem[3]}
                  key={elem[3]}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoris;
