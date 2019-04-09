export default function manageRecommendations(state = [], action) {
  switch (action.type) {
    case 'FETCH_RECOMMENDATIONS':
      console.log(action)
      return action.recommendations;
      
    case 'CREATE_RECOMMENDATION':
      console.log(action)
      return state.concat(action.recommendation);

    default:
      return state;
  }
}
