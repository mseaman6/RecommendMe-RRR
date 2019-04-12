import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavigBar from './containers/NavBar';
import RecommendationsContainer from './containers/RecommendationsContainer';
import RecommendationInput from './containers/RecommendationInput';
import RecommendationShowContainer from './containers/RecommendationShowContainer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigBar />
        <Switch>
          <Route exact path="/recommendations" component={RecommendationsContainer} />
          <Route exact path="/recommendations/new" component={RecommendationInput} />
          <Route exact path="/categories/:id" component={CategoryRecommendationsContainer} />
          <Route path="/recommendations/:id" component={RecommendationShowContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
