import React, { Component } from 'react'
import ClassComp from './ClassComp';

export class TodaysClasses extends Component {
  render() {
    return (
      <div>
        <h3>Today's Classes</h3>
        <ClassComp />
      </div>
    )
  }
}

export default TodaysClasses
