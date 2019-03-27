import { combineReducers } from 'redux'

const centreOptionsReducer = () => {
  return [
    {
      key: '0',
      text: 'Ponders End',
      value: 'Ponders End'
    },
    {
      key: '1',
      text: 'North Finchley',
      value: 'North Finchley'
    },
    {
      key: '2',
      text: 'Hendon',
      value: 'Hendon'
    },
    {
      key: '3',
      text: 'Walthamstow',
      value: 'Walthamstow'
    }
  ]
}

const selectedCentreReducer = (selectedCentre = '', action) => {
  if (action.type === 'CENTRE_SELECTED') {
    return action.payload
  }
  return selectedCentre
}


export default combineReducers({
  centres: centreOptionsReducer,
  selectedCentre: selectedCentreReducer
})