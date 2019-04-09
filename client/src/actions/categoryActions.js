
export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES' });
    return fetch(`api/categories`)
      .then(response => response.json())
      .then(categories => {
        dispatch({ type: 'FETCH_CATEGORIES', categories })
        console.log(categories)
      })
      .catch(error => console.log(error))
   };
}

export const addCategory = category => {
/*  return (dispatch) => {
    return fetch(`api/recommendations/`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(recommendation: recommendation)
    })
    .then(response => response.json())
    .then(recommendation => {
      console.log(recommendation)
      dispatch({ type: 'CREATE_RECOMMENDATION', recommendation })
    })
    .catch(error => console.log(error))
   };
   */
};
