import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteClass } from '../actions'
import Modal from './Modal'
import StudentCheckbox from './StudentCheckbox';

let ClassComp = (props) => {
  const { teacher, subject, students, day, isPresentstudents } = props.classOf
  const [modalVisible, setModalVisible] = useState(false)

  if (modalVisible) {
    return <Modal
      onDismiss={() => setModalVisible(false)}
      title="Delete class?"
      content={renderModalContent(teacher, day)}
      actions={renderModalActions(props, setModalVisible)}
    />
  }

  const renderStudents = (students, isPresentstudents) => {
    if (isPresentstudents && students.length > 0) {
      return (
        <div>
          {students.map((student, index) =>
            <StudentCheckbox key={index}
              student={student}
              handleCheckboxClick={handleCheckboxClick}
              checkedStatus={isPresentstudents[index]}
            />
          )}
        </div>
      )
    } else {
      return <p style={{ margin: '10px' }} >No students registered.</p>
    }
  }

  const handleCheckboxClick = (elId) => {
    const presentStudentEl = document.getElementById('present-students')

    // move StudentCheckbox element inside this element ^
  }

  return (
    <div className="ui segment" style={segmentStyle} >
      <div className="content">
        <div className="ui medium header">{teacher} - {subject}</div>
        <div className="ui divider"></div>
        <div className="ui sub header">Students</div>
        <div className="ui tiny header">Present:
          <div id="present-students"></div>
        </div>
        <div className="ui tiny header">Absent:
          <div id="absent-students">
            {renderStudents(students, isPresentstudents)}
          </div>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <button className="mini compact ui negative right floated button"
            onClick={() => setModalVisible(true)}>Delete Class
          </button>
          <Link to={`/todaysclass/edit/${props.classId}`} className="mini compact ui right floated button">Edit Class</Link>
        </div>
      </div>
    </div >
  )
}

const renderModalContent = (teacher, day) => `Are you sure you want to delete ${teacher}'s ${day} class?`

const renderModalActions = ({ classId, deleteClass }, setModalVisible) => {
  return <>
    <button onClick={() => deleteClass(classId)} className="ui button negative">Delete</button>
    <button onClick={() => setModalVisible(false)} className="ui button">Cancel</button>
  </>
}

const segmentStyle = {
  margin: '10px',
  width: '200px'
}



const mapStateToProps = (state, ownProps) => {
  return { classOf: state.classes[ownProps.classId] }
}


export default connect(mapStateToProps, { deleteClass })(ClassComp)