import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRecommendations(state = [], action) {
  switch (action.type) {
    case 'ADD_RECOMMENDATION':
      //const recommendation = {
      //  id: cuid(),
      //  text: action.text
      //}
      //return state.concat(recommendation);
      return state;

    //case 'DELETE_RECOMMENDATION':
      //return state.filter(recommendation => recommendation.id !== action.id);

    default:
      return state;
  }
}
