
export function fetchRecommendations() {
  return (dispatch) => {
    return fetch(`/api/recommendations`)
      .then(response => response.json())
      .then(recommendations => dispatch({ type: 'FETCH_RECOMMENDATIONS', recommendations }))
      .catch(error => console.log(error))
   };
}

export const deleteRecommendation = id => {
  return (dispatch) => {
    return fetch(`/api/recommendations/${id}`, {
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
  return (dispatch) => {
    return fetch(`/api/recommendations`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({recommendation: recommendation})
    })
    .then(response => response.json())
    .then(recommendation => {
      console.log(recommendation)
      dispatch({ type: 'CREATE_RECOMMENDATION', recommendation })
    })
    .catch(error => console.log(error))
   };
};

export const editRecommendation = (rec_id, recommendation) => {
  return (dispatch) => {
    return fetch(`/api/recommendations/${rec_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({recommendation: recommendation})
    })
    .then(response => response.json())
    .then(recommendation => {
      console.log(recommendation)
      dispatch({ type: 'UPDATE_RECOMMENDATION', recommendation })
    })
    .catch(error => console.log(error))
   };
};
