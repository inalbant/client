import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchClass, editClass } from '../actions'
import ClassForm from './ClassForm';

class EditClass extends Component {
  componentDidMount() {
    this.props.fetchClass(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editClass(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.classToEdit) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <ClassForm
          header="Edit a class"
          initialValues={_.pick(this.props.classToEdit, 'teacher', 'subject', 'day', 'students')}
          onSubmit={this.onSubmit}
          cancelNav="/todaysclass"
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    classToEdit: state.classes[ownProps.match.params.id]
  }
}



export default connect(mapStateToProps, { fetchClass, editClass })(EditClass)
