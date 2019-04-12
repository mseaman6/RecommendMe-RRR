
export function fetchCategories() {
   return (dispatch) => {
  //   dispatch({ type: 'LOADING_CATEGORIES' });
    return fetch(`/api/categories`)
      .then(response => response.json())
      .then(categories => {
        dispatch({ type: 'FETCH_CATEGORIES', categories })
        console.log(categories)
      })
      .catch(error => console.log(error))
    };
}

export const addCategory = category => {
  console.log(category)
  return (dispatch) => {
    return fetch(`/api/categories/`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({category: category})
    })
    .then(response => response.json())
    .then(category => {
      console.log(category)
      dispatch({ type: 'CREATE_CATEGORY', category })
    })
    .catch(error => console.log(error))
   };
};
