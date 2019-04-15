import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class ClassComp extends Component {
  render() {
    return (
      <div>
        this is a class
      </div>
    )
  }
}

export default reduxForm({
  form: 'classForm'
})(ClassComp)