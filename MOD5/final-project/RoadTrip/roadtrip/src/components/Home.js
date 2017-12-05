import React, { Component } from 'react'
import { fetchUsers } from '../actions/users'
import { fetchRides } from '../actions/trips'
import { connect } from 'react-redux'
import { Input, Button, Header, Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
    email: "",
    password: ""
  }

  componentDidMount() {
    this.props.fetchUsers()

    this.props.fetchRides()
  }


  handleClick = () => {

  }


  render() {
    console.log("HOME", this.props);
    return (
      <div className="home">
        <Image src='https://d2fzf9bbqh0om5.cloudfront.net/images/5388/original/make_your_road_trip_an_epic_adventure.jpg?1431399237' fluid/>
      </div>
    )
  }
}

const mapDispatchToProps = {
    fetchUsers, fetchRides
}

export default connect(null, mapDispatchToProps)(Home)



// <Button basic color='blue' size='massive' Link to="/about">Demo</Button>

// <Header> Login </Header>
// <Input placeholder='Email' value={this.state.email} />
// <Input placeholder='Password' value={this.state.password} />
