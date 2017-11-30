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
import { Card } from 'semantic-ui-react'



class TripList extends Component {
render() {
console.log('TripList', this.props);
  const tripCards = this.props.trips.trips.map((trip, index) => {
    return (
      <TripCard  key={index} trip={trip}/>
    )
  })
  return <div> {TripCard}</div>
  }
}

export default TripList;
