import React, { Component } from "react";
import TripCard from './TripCard.js'
import { Card, Form } from 'semantic-ui-react'
import { fetchTrips } from "./../../actions/trips"
import { connect } from "react-redux";


class TripList extends Component {

  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    console.log('TripList', this.props);

      const tripCards = this.props.trips.map((trip, index) => {
        return (
          <div>
          <TripCard key={index} {...trip}/>

          </div>
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
