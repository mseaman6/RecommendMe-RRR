export default function manageCategory(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATEGORY':
      console.log(action)
      return action.category;

    default:
      return state;
  }
}
