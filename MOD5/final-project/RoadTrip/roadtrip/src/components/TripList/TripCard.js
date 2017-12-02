// import React from 'react'
//
// const TripCard = ({ trip }) => {
//
//   const driver = trip.driver_id
//
//   const driverRating = () => {
//     const totalStars = driver.reviews.reduce((sum, review) => (sum + review.stars), 0)
//     return (totalStars/driver.reviews.length)
//   }
//
//   const available_seats = () => {
//
//   }
//
//
//   return (
//     <div className="ui card">
//       <div className="image">
//         <img src="" alt="pic"/>
//       </div>
//       <div className="content">
//         <a className="start">{trip.start_location}</a>
//         <a className="end">{trip.end_location}</a>
//         <a classname="duration">{trip.duration}</a>
//         <div className="meta">
//           <span className="price">
//             ${trip.price}
//           </span>
//         </div>
//       <div classname="seats">
//         <a classname="available">{trip.available_seats}
//       </div>
//       <div className="extra content">
//         <a>
//           <i className="star icon"></i>
//           {driverRating()} stars
//         </a>
//       </div>
//       <div className="comments">{trip.comments}</div>
//     </div>
//   )
// }
//
// export default TripCard

import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";

class TripCard extends Component {
  // handleClick = () => {
  //   console.log("Clicking");
  //   this.props.selectTrip(this.props.trip);
  // };

  createTripCards = () => {
    return this.props.trips.map(t => {
      return (
        <Card>
          <Card.Content>
            <Card.Header onClick={this.handleClick}>
              {t.username}
            </Card.Header>
            <Card.Meta>
              <span className="date">{t.start_location}</span>
            </Card.Meta>
            <Card.Description>{t.start_location}</Card.Description>
            <Card.Description>{t.end_location}</Card.Description>
            <Card.Description>{t.start_time}</Card.Description>
            <Card.Description>{t.end_time}</Card.Description>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    console.log("Card State", this.state);
    console.log("card", this.props);

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {this.props.driver_username} 
          </Card.Header>
          <Card.Description>{this.props.start_location}</Card.Description>
          <Card.Description>{this.props.end_location}</Card.Description>
          <Card.Description>{this.props.start_time}</Card.Description>
          <Card.Description>{this.props.end_time}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}


function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps)(TripCard)
