import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './containers/NavBar';
import RecommendationsContainer from './containers/RecommendationsContainer';
import RecommendationInput from './containers/RecommendationInput';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/recommendations" component={RecommendationsContainer} />
          <Route exact path="/recommendations/new" component={RecommendationInput} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
