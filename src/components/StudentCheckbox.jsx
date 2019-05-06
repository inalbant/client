import React from 'react'

const StudentCheckbox = (props) => {
  const uniqId = idGenerator()
  return (
    <div className="field" style={{ margin: '5px' }}>
      <div className="ui checkbox">
        <input type="checkbox" id={uniqId} checked={props.checkedStatus} onChange={() => props.handleCheckboxClick(uniqId)} />
        <label htmlFor={uniqId}>{props.student}</label>
      </div>
    </div>
  )
}

const idGenerator = () => [...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join('')



export default StudentCheckbox
