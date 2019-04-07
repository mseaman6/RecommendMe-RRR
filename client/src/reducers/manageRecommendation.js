export default function manageRecommendations(state = [], action) {
  switch (action.type) {
    case 'FETCH_RECOMMENDATIONS':
      return action.recommendations;

    //case 'DELETE_RECOMMENDATION':
      //return state.filter(recommendation => recommendation.id !== action.id);

    default:
      return state;
  }
}
