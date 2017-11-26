import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class NavBar extends Component {

  // Navbar needs to be connected to the store to know if someone is logged in



  render() {
    return (
      <div>
        <Menu>

          <Menu.Item>
            <Link to="/">
              <h3>Road Trip</h3>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/about">
              <h3>About</h3>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/signup">
              <h3>Sign Up</h3>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/search">
              <h3>Find a Ride</h3>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/create">
              <h3>Create a Ride</h3>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/view">
              <h3>Your Rides</h3>
            </Link>
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export default NavBar
