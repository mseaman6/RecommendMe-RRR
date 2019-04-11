
export function fetchRecommendation() {
  return (dispatch) => {
    return fetch(`api/recommendations/${recommendation_id}`)
      .then(response => response.json())
      .then(recommendation => dispatch({ type: 'FETCH_RECOMMENDATION', recommendation }))
      .catch(error => console.log(error))
   };
}
