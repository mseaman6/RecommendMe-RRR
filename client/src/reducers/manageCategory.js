export default function manageCategory(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      console.log(action)
      return action.categories;

    case 'CREATE_CATEGORY':
      console.log(action)
      return state.concat(action.category);

    default:
      return state;
  }
}
