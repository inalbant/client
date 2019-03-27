import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const Header = (props) => {
  return (
    <div className="ui secondary menu" >
      <h2>Axis Tuition Centre{(props.centre) ? ` - ${props.centre}` : ''} </h2>
      <div className="right menu" >
        {moment().format('Do MMMM YYYY')}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { centre: state.selectedCentre }
}

export default connect(mapStateToProps)(Header)
