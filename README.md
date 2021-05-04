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

### Home Page
![Home Page Gif](https://user-images.githubusercontent.com/70022612/117062786-e2607480-acf1-11eb-8a79-017fe96892ae.gif)

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
### Genres

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

### Movie Show
![Movie Show](https://user-images.githubusercontent.com/70022612/117063396-c5787100-acf2-11eb-8fce-c1636e1c6079.gif)

The movie show page features:

#### Trailer
![Trailer](https://user-images.githubusercontent.com/70022612/117064043-ac23f480-acf3-11eb-89f1-df63d1f05cdd.gif)


#### Add to watchlist / leave a review
Each user is only allowed to review a movie once `validates :user_id, uniqueness: { scope: :movie_id }`.

If a user does not have the movie in their watchlist, and they have not left a review, the following buttons will display:
![image](https://user-images.githubusercontent.com/70022612/117065113-0bcecf80-acf5-11eb-86be-8eec72fd209d.png)

If a user has both of the aforementioned, the following buttons will display instead:
![image](https://user-images.githubusercontent.com/70022612/117065252-40428b80-acf5-11eb-8585-37b638ab9aa9.png)

If a user is not logged in, a `Sign in to Review` button is instead displayed, which links to the sign in page
![Sign In To Review](https://user-images.githubusercontent.com/70022612/117064690-80edd500-acf4-11eb-95db-a376a9509fd6.png)


#### Description
Original poster image as well as a description with `release year`, `genre`, `runtime`, and `average rating`.
The average rating calculation was achieved through a helper function to return the average of all ratings (current as well as any added in the future). 
````
export const averageRating = (reviews) => {
	let xReviews = reviews;
	let total = 0;

	xReviews === undefined
		? ""
		: xReviews.forEach((review) => {
				total += review.rating;
		  });

	total = Math.floor((total / 50) * 100);
	if (total > 100) {
		total = 100;
	}
	return total;
};
````
This helper function is then called in a component to render a certain smiley face depending on that movie's average rating.
````
...
switch (true) {
  case rating == 0:
    icon =
      "https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016226/help_cgaulr.png";
    break;
  case rating <= 20:
    icon =
      "https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016253/anger_d6yl8b.png";
    break;
  case rating <= 40:
    icon =
      "https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016233/sad-face_qpaoqo.png";
    break;
  case rating <= 60:
    icon =
      "https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016232/neutral_byxrgw.png";
    break;
  case rating <= 80:
    icon =
      "https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016234/smile_cmcfvb.png";
    break;
  case rating <= 100:
    icon =
      "https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016225/grinning_a91kuo.png";
    break;
...
	}
````
All ratings are capped at 100%

#### All Reviews

