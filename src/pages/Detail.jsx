import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ProgressBar } from "react-bootstrap";
import "../styles/App.css";

const Detail = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const { id } = params;
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          setMovie(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsReady(true));
    };

  return (
    <>
      <div className="row">
        <div className="col text-end me-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="img-fluid p-4 h-75"
            alt="..."
          />
        </div>
        <div className="col mt-5">
          <h2 className="p-4">{movie.title}</h2>
          <div className="ps-4">
            <h4>Diskripsi</h4>
            <p className="w-75">{movie.overview}</p>
          </div>
          <div className="p-4">
            <h4>Tanggal Rilis</h4>
            <p>{movie.release_date}</p>
          </div>
          <div className="p-4 w-75">
            <h4>Rating</h4>
            <ProgressBar
              now={movie.vote_average*10}
              label={`${movie.vote_average}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;