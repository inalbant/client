import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

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

const renderInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <span className="inline field">
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </span>
  )
}

const renderStudents = ({ fields, meta: { error } }) => {
  return (
    <div>
      <div>
        <ol>
          {fields.map((student, index) => (
            <li key={index} >
              <Field
                name={student}
                type="text"
                component={renderInput}
              />
              <button
                className="compact negative ui icon button"
                type="button"
                title="Remove Student"
                onClick={() => fields.remove(index)}
              >
                <i className="delete icon" />
              </button>
            </li>
          ))}
          {error && <li className="error">{error}</li>}
        </ol>
      </div>
      <div>
        <button className="compact positive ui button" type="button" onClick={() => fields.push()}>
          Add Student
        </button>
      </div>
    </div>
  )
}

const NewClass = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="ui segment">
      <h4 className="ui dividing header">New Class</h4>
      <form className="ui form" onSubmit={handleSubmit} >
        <div className="two fields">
          <Field name="teacher" component={renderInput} type="text" label="Teacher: " />
          <Field name="subject" component={renderInput} type="text" label="Subject: " />
        </div>
        <Field name="day" component={renderDaysDropdown} label="Day: " />
        <div className="field">
          <label>Students:</label>
          <FieldArray name="students" component={renderStudents} />
        </div>
        <div>
          <button className="ui labeled primary icon button" type="submit" disabled={submitting}>
            <i className="paper plane icon" />
            Submit
          </button>
          <button className="ui labeled icon button" type="button" disabled={pristine || submitting} onClick={reset}>
            <i className="undo icon" />
            Clear Values
        </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'newClassForm'
})(NewClass)
