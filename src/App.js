import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { MainPage } from "./components/MainPage/MainPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/movie/i=:movieId?" exact component={MovieDetails}/>
      </Switch>
      
    </div>
  );
}

export default App;
