import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

const centres = ['Ponders End', 'North Finchley', 'Hendon', 'Walthamstow']

const renderCentreDropdown = ({ input, label }) => {
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

let HomePage = () => {
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <form className="ui large form">
          <div className="ui segment">
            <Field name="centreSelect" label="Select a centre: " component={renderCentreDropdown} />
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
          </div>
          <Link to="/todaysclass" className="ui fluid large pink submit button">Login</Link>
        </form>
      </div>
    </div>
  )
}

HomePage = reduxForm({
  form: 'centreSelectForm',
  destroyOnUnmount: false
})(HomePage)

export default HomePage