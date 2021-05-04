# Fresh Tomatoes 🍅

Check out the full build deployed [here](https://dg-fresh-tomatoes.herokuapp.com/) on Heroku 

Please log in as a guest user with:
* guest@gmail.com
* password



## Summary
Fresh Tomatoes is a review-aggregation website for films. All visitors are allowed to view movies, ratings, and reviews; only users that are logged in are eligible to add movies to their watchlist, or leave a review/rating for movies they've already seen.

The backend of Fresh Tomatoes was built with `Rails` and `PostgreSQL`, while the frontend was built using `React`, `Redux (React-Redux)`, `JavaScript`, `HTML`, and `CSS (SCSS)`. All aspects of this app are fully responsive in order to have usability on most current mobile devices.

## Libraries
Several external packages/libraries were used during the development of Fresh Tomatoes, including:
- [Axios](https://www.npmjs.com/package/axios)
- [Cloudinary](https://cloudinary.com/)
- [Lodash](https://lodash.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel)
- [React Player](https://www.npmjs.com/package/react-player)
- [React Rating Stars](https://www.npmjs.com/package/react-rating-stars-component)
- [React Redux Toastr](https://www.npmjs.com/package/react-redux-toastr)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

## Features

#### Home Page
![Fresh Tomatoes Top Home Page](https://user-images.githubusercontent.com/70022612/117055803-9578a000-ace9-11eb-81d3-63e2a1d88980.png)

The top carousel under "Trending on FT" contains 6 classic movies. The result was attained by filtering all movies fetched from the Redux store with `useSelector()` and returning only those with a release year less than 2000.

````
const classicMovies = () => {
  if (!_.isEmpty(moviesList.movies)) {
    return moviesList.movies.map((movie) => {
      if (movie.release_year < 2000) {
        return (
          <Carousel.Item ...>
            <Link ...>
              <img
                ...
              />
              <Carousel.Caption>
                ...
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      }
    });
  }
````

Filtering movies by genre was achieved through a similar process with the addition of making the function reusable. 
````
const moviesInGenre = (selectedGenre) => {
  if (!_.isEmpty(moviesList.movies)) {
    return moviesList.movies.map((movie) => {
      if (!_.isUndefined(movie.genre) && movie.genre.name === selectedGenre) {
        return (
          <li className="top-genre-movies-item">
            <Movie movie={movie} key={movie.id} rating={movie.reviews} />
          </li>
        );
      }
    });
  }
};
````
Exemplified above with the function `moviesInGenre`, by passing the parameter `selectedGenre` I am able to pass in any genre category and retrieve all movies within said genre.
Function call example:
````
moviesInGenre("Action");
moviesInGenre("Sci-Fi");
````
