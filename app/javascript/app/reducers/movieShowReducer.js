import {
  FETCH_MOVIE_SHOW_LOADING,
  FETCH_MOVIE_SHOW_SUCCESS,
  FETCH_MOVIE_SHOW_FAILED,
} from "../actions";

const movieShowReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE_SHOW_LOADING:
      return { ...state, loading: true, errorMessage: "" };
    case FETCH_MOVIE_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        errorMessage: "",
      };
    case FETCH_MOVIE_SHOW_FAILED:
      return { ...state, loading: false, errorMessage: "Unable to load movie" };
    default:
      return state;
  }
};

export default movieShowReducer;
