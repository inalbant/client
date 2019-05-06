import React from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { formValueSelector } from 'redux-form'


const Header = (props) => {
  return (
    <div className="ui secondary menu" >
      <h2 className="ui header">Axis Tuition Centre{(props.centreName) ? ` - ${props.centreName}` : ''} </h2>
      <div className="right menu" >
        {format(new Date(), "do MMMM yyyy - EEEE")}
      </div>
      <div className="ui divider"></div>
    </div>
  )
}

const selector = formValueSelector('centreSelectForm')

const mapStateToProps = (state) => {
  return { centreName: selector(state, 'centreSelect') }

}

export default connect(mapStateToProps)(Header)