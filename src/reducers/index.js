import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import classReducer from './classReducer'



export default combineReducers({
  form: formReducer,
  classes: classReducer
})