export default function manageRecommendations(state = [], action) {
  switch (action.type) {
    case 'FETCH_RECOMMENDATIONS':
      console.log(action)
      return action.recommendations;


    default:
      return state;
  }
}
