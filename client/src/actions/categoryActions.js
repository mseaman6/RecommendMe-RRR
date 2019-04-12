
export function fetchCategory() {
  return (dispatch) => {
    return fetch(`api/categories/${recommendation_id}`)
      .then(response => response.json())
      .then(category => dispatch({ type: 'FETCH_CATEGORY', category }))
      .catch(error => console.log(error))
   };
}
