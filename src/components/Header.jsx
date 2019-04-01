import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { formValueSelector } from 'redux-form'

let Header = (props) => {
  return (
    <div className="ui secondary menu" >
      <h2>Axis Tuition Centre{(props.centreName) ? ` - ${props.centreName}` : ''} </h2>
      <div className="right menu" >
        {moment().format('Do MMMM YYYY')}
      </div>
    </div>
  )
}


const selector = formValueSelector('centreSelectForm')

Header = connect(state => {
  const centreName = selector(state, 'centreSelect')
  return {
    centreName
  }
})(Header)

export default Header