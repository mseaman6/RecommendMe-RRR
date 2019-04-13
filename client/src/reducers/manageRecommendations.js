export default function manageRecommendations(state = [], action) {
  switch (action.type) {

    case 'FETCH_RECOMMENDATIONS':
      console.log(action)
      return action.recommendations;

    case 'CREATE_RECOMMENDATION':
      console.log(action)
      return state.concat(action.recommendation);

    case 'UPDATE_RECOMMENDATION':
      let updatedState = state.filter(recommendation => recommendation.id !== action.recommendation.id);
      updatedState.concat(action.recommendation);
      console.log(updatedState);
      return updatedState;

    default:
      return state;
  }
}
