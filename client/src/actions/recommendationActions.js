export function fetchRecommendations() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECOMMENDATIONS' });
    return fetch('http://localhost:3000/api/recommendations')
      .then(response => response.json())
      .then(response => dispatch({ type: 'FETCH_RECOMMENDATIONS', payload: response }))
   };
}
