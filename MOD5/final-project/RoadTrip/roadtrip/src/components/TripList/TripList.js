// import React, { Component } from "react";
// import TripCard from "./TripCard";
// import TripListContainer from "./TripListContainer"
//
// class TripList extends Component {
//   render() {
//     const tripCards = this.props.trips.map((trip, index) => {
//       return (
//         <TripCard key={index} trip={trip} onSelect={this.props.onSelect} />
//       );
//     });
//     return <div>{tripCards}</div>;
//   }
// }
//
// export default TripList;

import React, { Component } from "react";
import TripCard from './TripCard.js'
import { Card, Form } from 'semantic-ui-react'
import { fetchTrips } from "./../../actions/trips"
import { connect } from "react-redux";


class TripList extends Component {
  state = {
    searchedTrips: [],
    searchTerm: '',
    selectedTrip: [],
  }

  componentDidMount() {
    this.props.fetchTrips()
  }

  handleChange = (event) => {
    event.preventDefault()

    if (event.target.value === "" || null){
      this.setState({
        searchTerm: event.target.value,
        searchedTrips: this.state.trips
      })
    } else {
      let searchingTrips = this.state.trips.filter(trip => (trip.start_location.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
      this.setState({
        searchTerm: event.target.value,
        searchedTrips: searchingTrips

      })
    }


  render() {
    console.log('TripList', this.props);

      const tripCards = this.props.trips.map((trip, index) => {
        return (
          <TripCard key={index} {...trip}/>
        )
      })
      return tripCards
    }
  }

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: (trips) => dispatch(fetchTrips(trips))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList)
