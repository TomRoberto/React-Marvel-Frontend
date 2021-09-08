import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FicheComic from "../components/FicheComic";

const Personnage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-react-backend.herokuapp.com/personnage/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p className="loader">Chargement ... </p>
  ) : (
    <div className="container">
      <div className="personnage-informations">
        <h2 className="personnage-name">{data.name}</h2>
        <div
          style={{ border: "black solid 2px" }}
          className="img-perso-container"
        >
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt=""
          />
        </div>
        <p className="personnage-description">{data.description}</p>
        <p className="paragraphe">
          <span>{data.name}</span> apparaît dans les comics suivants:{" "}
        </p>
      </div>
      <div className="fiches-comics">
        {data.comics.map((elem, index) => {
          return (
            <FicheComic
              key={elem._id}
              photo={elem.thumbnail.path + "." + elem.thumbnail.extension}
              name={elem.title}
              description={elem.description}
              favable={true}
              id={elem._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personnage;
