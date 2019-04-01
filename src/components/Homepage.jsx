import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

const centres = ['Ponders End', 'North Finchley', 'Hendon', 'Walthamstow']

const renderCentreDropdown = ({ input, label }) => {
  console.log({ input })
  return (
    <div className="inline field">
      <label>{label}</label>
      <select {...input} >
        <option value="">Select a centre...</option>
        {centres.map(centre => (
          <option value={centre} key={centre}>
            {centre}
          </option>
        ))}
      </select>
    </div>
  )
}

let HomePage = (props) => {
  return (
    <div className="ui form">
      <form>
        <Field name="centreSelect" label="Select a centre: " component={renderCentreDropdown} />
      </form>
      Selected centre: {props.centreName}
    </div>
  )
}


HomePage = reduxForm({
  form: 'centreSelectForm'
})(HomePage)

const selector = formValueSelector('centreSelectForm')

HomePage = connect(state => {
  const centreName = selector(state, 'centreSelect')
  return {
    centreName
  }
})(HomePage)

export default HomePage