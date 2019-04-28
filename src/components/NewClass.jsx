import React from 'react'
import { connect } from 'react-redux'
import { createClass } from '../actions'
import ClassForm from './ClassForm';

class NewClass extends React.Component {
  onSubmit = formValues => {
    this.props.createClass(formValues)
  }

  render() {
    return (
      <ClassForm
        header="Set Up a New Class"
        onSubmit={this.onSubmit}
        cancelNav="/todaysclass"
      />
    )
  }
}

export default connect(null, { createClass })(NewClass)