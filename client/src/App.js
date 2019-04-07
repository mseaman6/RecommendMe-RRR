import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './containers/NavBar';
import RecommendationsContainer from './containers/RecommendationsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Recommendations Container
        <RecommendationsContainer />
      </div>
    );
  }
}

//const App = (props) => {
//  return (
//    <Router>
//      <div>
//        <NavBar />
//        <Route exact path="/" render={Home} />
//        <Route exact path="/recommendations" render={Recommendations} />
//        <Route exact path="/categories" render={Categories} />
//        <Route exact path="/recommendations/new" render={RecommendationInput} />
//      </div>
//    </Router>
//  );
//};

export default App;
