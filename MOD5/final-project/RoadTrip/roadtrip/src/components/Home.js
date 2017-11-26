import React, { Component } from 'react'
import { fetchUsers } from '../actions/users'
import { connect } from 'react-redux'
import { Input, Menu, Button, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {
    email: "",
    password: ""
  }

  componentDidMount() {
    this.props.fetchUsers()
  }


  render() {
    return (
      <div className="home">
      <Header> Login </Header>
        <Input placeholder='Email' value={this.state.email} />
        <Input placeholder='Password' value={this.state.password} />
        <Button >Login</Button>
        <Image src='https://defensivetraininggroup.files.wordpress.com/2017/03/roadtrip.jpg' size='large'/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
