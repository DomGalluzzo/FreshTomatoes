import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GenresList from "../containers/GenresList";

import HomePage from "../containers/HomePage";
import MovieShow from "../containers/MovieShow";
import MoviesList from "../containers/MoviesList";
import UserWatchlist from "../containers/UserFavorites";

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" exact component={HomePage} />
        <Route path="/movies/:id" exact component={MovieShow} />
        <Route exact path="/users/:id/favorites" component={UserWatchlist} />
        <Route path="/movies" component={MoviesList} />
        <Route path="/genres" component={GenresList} />
      </Switch>
    </Router>
  );
};

export default App;
