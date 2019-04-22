import classes from '../apis/classes'

// async action thanks to redux-thunk
export const createClass = formValues => async dispatch => {
  const response = await classes.post('/classes', formValues)

  dispatch({ type: 'CREATE_CLASS', payload: response.data })
}

export const fetchClass = id => async dispatch => {
  const response = await classes.get(`/classes/${id}`)

  dispatch({ type: 'FETCH_CLASS', payload: response.data })
}

export const fetchTodayClasses = day => async dispatch => {
  const response = await classes.get(`/classes?day=${day}`)

  dispatch({ type: 'FETCH_TODAYCLASSES', payload: response.data })
}

export const editClass = (id, formValues) => async dispatch => {
  const response = await classes.put(`/classes/${id}`, formValues)

  dispatch({ type: 'EDIT_CLASS', payload: response.data })
}

export const deleteClass = id => async dispatch => {
  await classes.delete(`/classes/${id}`)

  dispatch({ type: 'DELETE_CLASS', payload: id })
}

export const fetchAllClasses = () => async dispatch => {
  const response = await classes.get(`/classes`)

  dispatch({ type: 'FETCH_ALLCLASSES', payload: response.data })
}