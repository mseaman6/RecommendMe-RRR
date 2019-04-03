import { combineReducers } from "redux";
import manageRecommendation from './manageRecommendation'

import cuid from 'cuid';
export const cuidFn = cuid;

const rootReducer = combineReducers({
  recommendations: manageRecommendation
});

export default rootReducer;
