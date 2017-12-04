import React, { Component } from "react";
import TripCard from './TripCard.js'
import { Card, Form } from 'semantic-ui-react'
import { fetchTrips } from "./../../actions/trips"
import { connect } from "react-redux";


class TripList extends Component {



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


export default TripList
