import { combineReducers } from "redux";
import manageRecommendation from './manageRecommendation'
import manageCategory from './manageCategory'


const rootReducer = combineReducers({
  recommendations: manageRecommendation
  categories: manageCategory
});

export default rootReducer;
