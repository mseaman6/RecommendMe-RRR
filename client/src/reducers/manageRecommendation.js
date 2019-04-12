export default function manageRecommendation(state = [], action) {
  switch (action.type) {
    case 'FETCH_RECOMMENDATION':
      console.log(action)
      return action.recommendation;
      
    default:
      return state;
  }
}
