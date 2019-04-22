import React from 'react'
import { connect } from 'react-redux'
//import { deleteClass, fetchAllClasses } from '../actions'

const ClassComp = (props) => {
  const { teacher, subject, students, id } = props.classOf

  return (
    <div className="ui segment" style={segmentStyle} >
      <div className="content">
        <div className="ui medium header">{teacher} - {subject}</div>
        <div className="ui divider"></div>
        <div className="ui sub header">Students</div>
        <div>{renderStudents(students)}</div>
        <div style={{ marginBottom: '30px' }}>
          <button className="mini compact ui negative right floated button"
            onClick={() => props.deleteClass(id)}>Delete Class
          </button>
          <button className="mini compact ui right floated button">Edit Class</button>
        </div>

      </div>
    </div >
  )
}

const segmentStyle = {
  margin: '10px',
  width: '200px'
}

const renderStudents = (students) => {
  if (students && students.length > 0) {
    return (
      <ol>
        {students.map((student, index) =>
          <li key={index}>{student}</li>
        )}
      </ol>
    )
  } else {
    return <p style={{ margin: '10px' }} >No students registered.</p>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { classOf: state.classes[ownProps.classId] }
}

export default connect(mapStateToProps)(ClassComp)