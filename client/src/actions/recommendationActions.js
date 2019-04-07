
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
  return {
    type: 'DELETE_RECOMMENDATION',
    id
  };
};

export const addRecommendation = recommendation => {
  return {
    type: 'DELETE_RECOMMENDATION',
    recommendation
  };
};
