export default function manageCategory(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      console.log(action)
      return action.categories;


    default:
      return state;
  }
}
