import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";


class TripCard extends Component {
  // handleClick = () => {
  //   console.log("Clicking");
  //   this.props.selectTrip(this.props.trip);
  // };

  handleReserve = () => {
// make post fetch to update the # of seats in car and add the trip to the user's queue
  }

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
            <Card.Description> {t.start_location}</Card.Description>
            <Card.Description> {t.start_time}</Card.Description>
            <Card.Description> {t.end_location}</Card.Description>
            <Card.Description> {t.end_time}</Card.Description>
            <Card.Description>{t.available_seats}</Card.Description>
            <Card.Description>{t.seat_price}</Card.Description>
            <Card.Description>{t.car}</Card.Description>
            <Card.Description>{t.comments}</Card.Description>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    // console.log("Card State", this.state);
    // console.log("card", this.props);

    return (
      <Card fluid >
        <Card.Content>
          <Card.Header>
          Driver: {this.props.driver_username}
          </Card.Header>
          <Card.Description> Origin: {this.props.start_location} => Departure Time: {this.props.start_time}</Card.Description>
          <Card.Description>Destination: {this.props.end_location} => Estimated Arrival Time: {this.props.end_time}</Card.Description>
          <Card.Description>Available Seats: {this.props.available_seats}</Card.Description>
          <Card.Description>Car: {this.props.car}</Card.Description>
          <Card.Description>Rating: {this.props.rating}</Card.Description>
          <Card.Description>About this trip: {this.props.comments}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={this.handleReserve}>Reserve a seat! </Button>
        </div>
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
