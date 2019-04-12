import { combineReducers } from "redux";
import manageRecommendations from './manageRecommendations'
import manageCategories from './manageCategories'
import manageComments from './manageComments'
import manageRecommendation from './manageRecommendation'
import manageCategory from './manageCategory'

const rootReducer = combineReducers({
  recommendations: manageRecommendations,
  categories: manageCategories,
  comments: manageComments,
  recommendation: manageRecommendation,
  category: manageCategory
});

export default rootReducer;
