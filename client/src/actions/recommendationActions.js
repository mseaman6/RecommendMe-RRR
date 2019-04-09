
export function fetchRecommendations() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECOMMENDATIONS' });
    return fetch(`api/recommendations`)
      .then(response => response.json())
      .then(recommendations => dispatch({ type: 'FETCH_RECOMMENDATIONS', recommendations }))
      .catch(error => console.log(error))
   };
}


export const deleteRecommendation = id => {
  return (dispatch) => {
    return fetch(`api/recommendations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json'
      },
    })
    .then(response => response.json())
    .then(recommendations => {
      console.log(recommendations)
      dispatch({ type: 'FETCH_RECOMMENDATIONS', recommendations })
    })
    .catch(error => console.log(error))
   };
};

export const addRecommendation = recommendation => {
  return {
    type: 'DELETE_RECOMMENDATION',
    recommendation
  };
};
