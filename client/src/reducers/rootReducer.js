import { combineReducers } from "redux";
import manageRecommendation from './manageRecommendation'
import manageCategory from './manageCategory'
import manageComment from './manageComment'

const rootReducer = combineReducers({
  recommendations: manageRecommendation,
  categories: manageCategory,
  comments: manageComment,
});

export default rootReducer;
