import React from "react";
import { addFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import { Button } from "react-bootstrap";

const AddFavorite = ({ user, movie }) => {
  const dispatch = useDispatch();
  const userFavorites = useSelector((state) => state.favorites.favorites);

  const handleAddFavorite = () => {
    if (!_.isUndefined(userFavorites)) {
      if (userFavorites.some((favorite) => favorite.movie_id === movie.id)) {
        return (
          <Button className="btn btn-danger button-align disabled">
            Already In Watchlist
          </Button>
        );
      } else {
        return (
          <Button
            className="btn btn-success button-align"
            onClick={() => {
              dispatch(addFavorite(user.id, movie));
            }}>
            Add To Watchlist
          </Button>
        );
      }
    }
  };

  return <>{handleAddFavorite()}</>;
};

export default AddFavorite;
