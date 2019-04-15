import React, { Component } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { fetchTodayClasses, fetchIdClasses, fetchClass } from '../actions'

export class TodaysClasses extends Component {

  componentDidMount() {
    this.props.fetchTodayClasses('Tuesday')
  }

  renderClasses() {
    if (this.props.classes.length > 0) {
      return this.props.classes.map(class => {
        return(
          <p> kk</p >
        );
    });
  } else {
  return <p>There are no classes for today.</p>
}
  }

render() {
  return (
    <div>
      <h3>{format(new Date(), "EEEE") + "'s"} Classes</h3>
      {this.renderClasses()}
    </div>
  )
}
}

const mapStateToProps = state => {
  // turn the classes object to an array for easier iterations
  return { classes: Object.values(state.classes) }
}

export default connect(mapStateToProps, { fetchIdClasses, fetchTodayClasses, fetchClass })(TodaysClasses)
