
export const fetchRecommendation = id => {
  return (dispatch) => {
    return fetch(`/api/recommendations/${id}`)
      .then(response => response.json())
      .then(recommendation => dispatch({ type: 'FETCH_RECOMMENDATION', recommendation }))
      .catch(error => console.log(error))
   };
}
