import { useEffect, useState } from "react";
import axios from "axios";
import FicheComic from "../components/FicheComic";
import FooterPages from "../components/FooterPages";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?page=${page}`
        );
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
          <FicheComic
            photo={elem.thumbnail.path + "." + elem.thumbnail.extension}
            name={elem.title}
            description={elem.description}
          />
        );
      })}
      <FooterPages tab={tabNumberOfPages} setPage={setPage} page={page} />
    </div>
  );
};

export default Comics;
