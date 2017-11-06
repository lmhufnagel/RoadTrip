import React from 'react'


const NameList = (props) => {
  return <h3>Your new name is : {props.first} {props.last}</h3>
}

NameList.defaultProps = {
  first: '',
  last: ''
}

export default NameList
