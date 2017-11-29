import React, { Component } from "react";
import TripCard from "./TripCard";

class TripList extends Component {
  render() {
    const tripCards = this.props.trips.map((trip, index) => {
      return (
        <TripCard key={index} trip={trip} onSelect={this.props.onSelect} />
      );
    });
    return <div>{tripCards}</div>;
  }
}

export default TripList;
