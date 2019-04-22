import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CLASS':
      return { ...state, [action.payload.id]: action.payload }
    case 'CREATE_CLASS':
      return { ...state, [action.payload.id]: action.payload }
    case 'EDIT_CLASS':
      return { ...state, [action.payload.id]: action.payload }
    case 'DELETE-CLASS':
      return _.omit(state, action.payload)
    case 'FETCH_TODAYCLASSES':
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case 'FETCH_ALLCLASSES':
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    default:
      return state
  }
}