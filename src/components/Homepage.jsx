import React from 'react'
import { connect } from 'react-redux'
import { selectCentre } from '../actions'
import { Dropdown, Segment } from 'semantic-ui-react'

const Homepage = (props) => {
  const handleChange = (e, data) => {
    props.selectCentre(data.value)
  }

  return (
    <Segment>
      <Dropdown
        placeholder="Select a centre"
        fluid
        selection
        options={props.centres}
        onChange={handleChange}
      />

      Selected centre: {props.centre}
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return {
    centres: state.centres,
    centre: state.selectedCentre
  }
}



export default connect(mapStateToProps, { selectCentre })(Homepage)
