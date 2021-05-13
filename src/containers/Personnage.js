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
          `http://localhost:4000/personnage/comics/${id}`
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
    <p>Chargement ... </p>
  ) : (
    <div>
      <div>
        <h2> {data.name}</h2>
        <div>
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt=""
          />
        </div>
        <p>{data.description}</p>
      </div>
      <div>
        {data.comics.map((elem, index) => {
          return (
            <FicheComic
              key={elem._id}
              photo={elem.thumbnail.path + "." + elem.thumbnail.extension}
              name={elem.title}
              description={elem.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personnage;
