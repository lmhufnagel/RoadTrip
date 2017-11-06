import React, { Component } from 'react'
import NameList from './NameList'

class NameForm extends Component {

  state = {
    first: "",
    last: "",
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      first: "",
      last: ""
    })
  }

  handleFirst = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    /// tell our parent
    // this.props.onAdd(this.state.first)
    this.setState({
      first: event.target.value
    })
  }

  handleLast = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    /// tell our parent
    // this.props.onAdd(this.state.last)
    this.setState({
      last: event.target.value
    })
  }

  // handleInputChange = (event) => {
  //   this.setState({
  //     input: event.target.value
  //   })
  // }

  debugger;

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Write your faviorite ice cream flavor:
            <input id="test-first" type="text" value={this.state.first}
            first={this.state.first}
            onChange={this.handleFirst}/>
          </label>
        </div>
        <div>
          <label>
            The name of the first street you lived on:
            <input id="test-last" type="text" value={this.state.last}
            last={this.state.last}
            onChange={this.handleLast}/>
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}



export default NameForm
