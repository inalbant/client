import React from 'react'
import { Field, reduxForm } from 'redux-form'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const renderDaysDropdown = ({ input, label }) => {
  return (
    <div className="inline field">
      <label>{label}</label>
      <select {...input}>
        <option value="">Select a day of the week...</option>
        {days.map(day => (
          <option value={day} key={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  )
}

const renderInput = ({ input, label }) => {
  return (
    <div className="inline field">
      <label>{label}</label>
      <input {...input} />
    </div>
  )
}

const NewClass = () => {
  return (
    <div className="segment">
      <h4>New Class</h4>
      <form className="ui form">
        <Field name="teacher" component={renderInput} type="text" label="Teacher: " />
        <Field name="subject" component={renderInput} type="text" label="Subject: " />
        <Field name="day" component={renderDaysDropdown} label="Day: " />
        <div className="field">
          <label>Students:</label>
          <Field name="students" component={renderInput} />
        </div>
      </form>

    </div>
  )

}

export default reduxForm({
  form: 'newClassForm'
})(NewClass)
