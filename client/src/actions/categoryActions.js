
export const fetchCategory = id => {
  debugger;
  return (dispatch) => {
    return fetch(`api/categories/${id}`)
      .then(response => response.json())
      .then(category => dispatch({ type: 'FETCH_CATEGORY', category }))
      .catch(error => console.log(error))
   };
}
