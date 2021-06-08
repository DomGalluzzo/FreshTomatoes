# Fresh Tomatoes 🍅

Check out the full build deployed [here](https://dg-fresh-tomatoes.herokuapp.com/) on Heroku 




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
  ...
  ...
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
   ...
   ...
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
![image](https://user-images.githubusercontent.com/70022612/117072168-0f1a8900-acfe-11eb-98cc-16bd889a5841.png)

Original poster image as well as a description with `release year`, `genre`, `runtime`, and `average rating`.
The average rating calculation was achieved through a helper function to return the average of all ratings (current as well as any added/deleted in the future). 
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
All ratings are capped at 100%

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


#### Movie Info
The movie info contains a brief synopsis as well as the `director`, `genre`, `release year`, and `runtime`.
![image](https://user-images.githubusercontent.com/70022612/117066305-9532d180-acf6-11eb-97ab-202c0a585ea8.png)

Runtime is calculated with a helper function to convert the number from minutes to hours and minutes, as demonstrated below.
````
export const runtimeConversion = (n) => {
	let num = n;
	let hours = num / 60;
	let rhours = Math.floor(hours);
	let minutes = (hours - rhours) * 60;
	let rminutes = Math.round(minutes);
	return `${rhours}h ${rminutes}m`;
};
````
#### Cast & Crew (see above picture under Movie Info)
Lists notable `actors`, `real name`, `character name`, as well as their `portrait`. If an actor doesn't have a portrait, they are given a default picture.


### Reviews
#### Adding a new review
When a user adds a new review, a modal form renders. Upon submission of the new review in the example below, we can see the rating change from 78% to 88%, the rating icon change to a larger smile, and the button which previously said "Add review" now says "edit review".
![Review](https://user-images.githubusercontent.com/70022612/117067514-1fc80080-acf8-11eb-8849-ca446fcf55ff.gif)

The `onClick` event tied to the submit button triggers the `handleCreateReview` function.
````
const handleCreateReview = () => {
  dispatch(createReview(movieId, currentUser, comment, rating));

  setRating(null);
  setComment("");
};
````
This function dispatches the createReview action which is an asynchronous POST method to my API's endpoint.
````
export const createReview = (movieId, currentUser, comment, rating) => async (
  ...
	try {
		dispatch({
			type: CREATE_REVIEW_LOADING,
		});

		const response = await Axios.post(`/api/v1/movies/${movieId}/reviews`, {
			user_id: userId,
			movie_id: movieId,
			comment,
			rating,
		});

		const data = JSON.parse(response.config.data);

		dispatch({
			type: CREATE_REVIEW_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_REVIEW_FAILED,
		});
	}
};
````
The response is then received and dispatched to the `movieReviewsReducer` (and eventually combined with all other reducers in the `rootReducer`)
````
const movieReviewsReducer = (state = [], action) => {
	switch (action.type) {
		case CREATE_REVIEW_LOADING:
			return { ...state, loading: true, errorMessage: "" };

		case CREATE_REVIEW_SUCCESS:
			return {
				...state,
				reviews: [...state.reviews, { review: action.payload }],
				loading: false,
				errorMessage: "",
			};

		case CREATE_REVIEW_FAILED:
			return { ...state, loading: false, errorMessage: "Unable to add review" };
````

#### Editing a review
When a user edits their review, a separate modal form renders which shows their previous rating, as well as their previous comment (shown as a placeholder value in the comment box). Upon submission of this edit, we once again see the movie's average rating change from 88% to 82%.
![Edit Review](https://user-images.githubusercontent.com/70022612/117068207-fa87c200-acf8-11eb-91d3-cf3958afcc94.gif)

#### Deleting a review
When a user deletes their review, a confirmation alert displays and the user is prompted to confirm their action.
![Delete Review](https://user-images.githubusercontent.com/70022612/117068540-68cc8480-acf9-11eb-96c9-83342eb404de.gif)

### User Watchlist
A user's watchlist comprises of the user's `username` + "Watchlist" as well as all the movies they have individually selected.
![image](https://user-images.githubusercontent.com/70022612/117070088-4d627900-acfb-11eb-914f-63362438cf98.png)

#### Deleting a movie from watchlist
User's are able to delete a movie from their watchlist at any point.
![Delete Favorite](https://user-images.githubusercontent.com/70022612/117070496-d083cf00-acfb-11eb-8114-483a05045806.gif)

# Going Forward
- Implement a `Director` show page listing out relevant info, including all movies they've directed
- Add an `Actor` show page listing out relevant info, as well as all movies they've been in
- Search bar functionality with ElasticSearch, or SearchKick.
- Introduce a `Similar movies by genre` component on the bottom of the `Movie` show page to allow a better user-flow from movie to movie
