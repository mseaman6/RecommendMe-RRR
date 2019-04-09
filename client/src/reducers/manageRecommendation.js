export default function manageRecommendations(state = [], action) {
  switch (action.type) {
    case 'FETCH_RECOMMENDATIONS':
      console.log(action)
      debugger;
      return action.recommendations;


    default:
      return state;
  }
}
