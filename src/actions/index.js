import classes from '../apis/classes'


// async action thanks to redux-thunk
export const createClass = formValues => async dispatch => {
    classes.post('/classes', formValues)
}