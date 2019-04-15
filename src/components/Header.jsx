import React from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { formValueSelector } from 'redux-form'


const Header = (props) => {
  return (
    <div className="ui secondary menu" >
      <h2 className="ui dividing header">Axis Tuition Centre{(props.centreName) ? ` - ${props.centreName}` : ''} </h2>
      <div className="right menu" >
        {format(new Date(), "do MMMM yyyy - EEEE")}
      </div>
    </div>
  )
}


const selector = formValueSelector('centreSelectForm')

export default connect(state => {
  const centreName = selector(state, 'centreSelect')
  return {
    centreName
  }
})(Header)