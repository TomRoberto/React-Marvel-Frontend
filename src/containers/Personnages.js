import { useEffect, useState } from "react";
import axios from "axios";
import FicheHero from "../components/FicheHero";
import FooterPages from "../components/FooterPages";

const Personnages = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnages?page=${page}`
        );
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);

  const numberOfPages = Math.ceil(data.count / 100);
  const tabNumberOfPages = [];
  for (let i = 0; i < numberOfPages; i++) {
    tabNumberOfPages.push(0);
  }
  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <div>
      {data.results.map((elem, index) => {
        return (
          <FicheHero
            key={elem._id}
            name={elem.name}
            description={elem.description}
            photo={elem.thumbnail.path + "." + elem.thumbnail.extension}
            id={elem._id}
          />
        );
      })}
      <FooterPages tab={tabNumberOfPages} setPage={setPage} />
    </div>
  );
};

export default Personnages;
