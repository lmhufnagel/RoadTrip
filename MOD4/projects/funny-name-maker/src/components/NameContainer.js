import React, { Component } from 'react'
import NameList from './NameList'
import NameForm from './NameForm'



class NameContainer extends Component {


  state = {
    names: ["Lisa"]
  }



  addNames = (name) => {
    this.setState({
      names: [...this.state.names, name]
    })
  }

  render() {

    return (
      <div>
        <NameForm onAdd={this.addNames}/>
        <NameList names={this.state.names}/>
      </div>
    )
  }

  createName

}


export default NameContainer
