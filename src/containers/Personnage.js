import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Personnage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnage/comics/${id}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return <div>Personnage</div>;
};

export default Personnage;
