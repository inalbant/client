import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { fetchTodayClasses } from '../actions'
import ClassComp from './ClassComp';

class TodaysClasses extends Component {

  componentDidMount() {
    this.props.fetchTodayClasses('Tuesday')
  }

  renderClasses = (classes) => {
    if (classes.length > 0) {
      return classes.map((classRoom) =>
        <ClassComp classId={classRoom.id} key={classRoom.id} />
      )
    } else {
      return <div>There are no classes for today.</div>
    }
  }

  render() {
    return (
      <div>
        <h3>{format(new Date(), "EEEE") + "'s"} Classes</h3>
        <div className="ui divider"></div>
        <div className="ui grid container">
          <div className="row">
            {this.renderClasses(this.props.classes)}
          </div>
          <div className="row">
            <Link to="/newclass" className="ui labeled primary icon button">
              <i className="plus icon" />
              Add Class
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // turn the classes object to an array for easier iterations
  return { classes: Object.values(state.classes) }
}

export default connect(mapStateToProps, { fetchTodayClasses })(TodaysClasses)
