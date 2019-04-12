export default function manageComments(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      console.log(action)
      return action.comments;

    case 'CREATE_COMMENT':
      console.log(action)
      return state.concat(action.comment);

    default:
      return state;
  }
}
