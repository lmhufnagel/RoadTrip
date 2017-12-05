import React, { Component } from "react";
import UserContainer from "./containers/UserContainer";
import RideContainer from "./containers/RideContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import CreateTrip from "./components/CreateTrip";
import ReviewList from "./components/ReviewList";
import Seat from "./components/Seat";
import { Route } from "react-router-dom";
import { tripReducer } from './reducers/tripReducer.js'
import { userReducer } from './reducers/userReducer.js'
import { createTripReducer } from './reducers/createTripReducer'
import { fetchRides } from './actions/trips.js'

class App extends Component {
  state = {
    reservedSeats: []
  };



  reserveSeat = seat => {
    this.setState({
      reservedSeats: [...this.state.reservedSeats, seat]
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
      <Route path='/' component={NavBar} />
      <Route path="/" exact component={Home}/>
      <Route
        path="/trips"
        render={props => (
          <RideContainer {...props} onReserve={this.reserveSeat} />
        )}
      />
      <Route path="/reviews" exact component={ReviewList}/>
      <Route path="/about" exact component={About}/>
      <Route path="/create" exact component={CreateTrip}/>
      <Route path="/signup" exact component={Signup}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {rides: state.rides}
}

export default App;

// Route path="/" component={NavBar}
