import { useEffect, useState } from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";

import Item from "../components/Item";

const Favorite = () => {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    document.title = "Daftar Film Favorite";
    
    const data = JSON.parse(localStorage.getItem("data"));

    if (data) {
      dispatch(reduxAction("getFavorites", data));
    } else {
      dispatch(reduxAction("getFavorites", []));
    }
  };

  return (
    <>
        <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-5">
          {favorites.map((itemfilm) => {
            return (
              <div className="mb-5" key={itemfilm.id}>
                <Item
                  item={itemfilm}
                  halamanFavorite={true}
                  navigate={`/detail/${itemfilm.id}`}
                  parentCallback={() => fetchData()}
                />
              </div>
            );
          })}
        </div>
    </>
  );
};

export default Favorite;
