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
import CategoryRecommendationsContainer from './containers/CategoryRecommendationsContainer';
import CategoryInput from './containers/CategoryInput';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigBar />
        <div>
          <Switch>
            <Route exact path="/recommendations" component={RecommendationsContainer} />
            <Route exact path="/recommendations/new" component={RecommendationInput} />
            <Route exact path="/recommendations/:id" component={RecommendationShowContainer} />
            <Route exact path="/recommendations/:id/edit" component={RecommendationInput} />
            <Route exact path="/categories/new" component={CategoryInput} />
            <Route exact path="/categories/:id" component={CategoryRecommendationsContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
