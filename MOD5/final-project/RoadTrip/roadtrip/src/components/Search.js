
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import '../../style/home.css'
import { Redirect } from 'react-router-dom'


class Search extends Component {


  state = {
    input: "",
    redirectToTripList: false
  }

  handleChange = (ev) => {
    this.setState({input: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({redirectToTripList: true})
  }

  searchSubmitted = () => {
    if (this.state.redirectToTripList) {
      const path = `/trips/?query=${this.state.input}`
      return <Redirect push to={path}/>
    } else {
      return null
    }
  }

  render() {

    return (
      <div className="home-search-container" >
        <form onSubmit={this.handleSubmit}>
          <div className="ui action input">
            <input type="text" onChange={this.handleChange} value={this.state.input} className="home-search" placeholder="Where do you want to cook?" />
            <Button className="teal" value="Search">Search</Button>
          </div>
        </form>
        {this.searchSubmitted()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ users: state.trips.users })

export default connect(mapStateToProps)(Search)
