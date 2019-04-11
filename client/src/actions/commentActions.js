export function fetchComments(rec_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' });
    return fetch(`/api/recommendations/${rec_id}/comments`)
      .then(response => response.json())
      .then(recommendations => dispatch({ type: 'FETCH_RECOMMENDATIONS', recommendations }))
      .catch(error => console.log(error))
   };
}

export const deleteComment = (rec_id, id) => {
  return (dispatch) => {
    return fetch(`/api/recommendations/${rec_id}/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json'
      },
    })
    .then(response => response.json())
    .then(comments => {
      console.log(comments)
      dispatch({ type: 'FETCH_COMMENTS', comments })
    })
    .catch(error => console.log(error))
   };
};


export const addComment = (rec_id, comment) => {
  return (dispatch) => {
    return fetch(`/api/recommendations/${rec_id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
    .then(response => response.json())
    .then(comment => {
      console.log(comment)
      dispatch({ type: 'CREATE_COMMENT', comment })
    })
    .catch(error => console.log(error))
   };
};
