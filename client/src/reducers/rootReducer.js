import { combineReducers } from "redux";
import manageRecommendations from './manageRecommendations'

import cuid from 'cuid';
export const cuidFn = cuid;

const rootReducer = combineReducers({
  recommendations: manageRecommendation
});

export default rootReducer;
