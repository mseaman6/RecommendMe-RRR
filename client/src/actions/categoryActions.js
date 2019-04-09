
export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES' });
    return fetch(`api/categories`)
      .then(response => response.json())
      .then(categories => dispatch({ type: 'FETCH_CATEGORIES', categories }))
      .catch(error => console.log(error))
   };
}
