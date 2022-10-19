import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "../styles/App.css";

import Item from "../components/Item";

const Main = () => {
  const favorites = useSelector((state) => state.favorites);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        setData(response.data.results);
        document.title = "Daftar Film";
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  console.log(favorites);  

  return (
    <>
      {isReady ? (
        <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-5">
          {data.map((itemfilm) => {
            return (
              <div className="mb-5" key={itemfilm.id}>
                <Item item={itemfilm} navigate={`/detail/${itemfilm.id}`} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>LAGI LOADING</p>
      )}
    </>
  );
};

export default Main;
