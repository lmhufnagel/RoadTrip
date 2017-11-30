import React, { Component } from "react";
import UserContainer from "./containers/UserContainer";
import TripContainer from "./containers/TripContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import CreateTrip from "./components/CreateTrip";
import ReviewList from "./components/ReviewList";
import { Route } from "react-router-dom";
import { fetchTrips } from './actions/trips.js'

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
          <TripContainer {...props} onReserve={this.reserveSeat} />
        )}
      />
      <Route path="/reviews" exact component={ReviewList}/>
      <Route path="/about" exact component={About}/>
      <Route path="/create" exact component={CreateTrip}/>
      </div>
    );
  }
}

export default App;

// Route path="/" component={NavBar}
