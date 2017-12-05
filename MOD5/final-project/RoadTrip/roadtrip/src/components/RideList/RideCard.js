import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { reserveSeat } from "../../actions/trips"


class TripCard extends Component {
  // handleClick = () => {
  //   console.log("Clicking");
  //   this.props.selectTrip(this.props.trip);
  // };

  handleReserve = () => {
    ;
    if(this.props.available_seats <= 0 ){
      return alert("There are no remaining seats on this trip")
    }else {
      console.log("clicked!", this.props.id)
      const seatObj = {seat: {
        available: false,
        ride_id: this.props.id,
        rider_id: 1
      }}
      this.props.reserveSeat(seatObj)
      // this.props.removeSeat(this.props.available_seats - 1)
    }
// make post fetch to update the # of seats in car and add the trip to the user's queue
  }

  createTripCards = () => {
    return this.props.rides.map(t => {
      return (
        <Card>
          <Card.Content>
            <Card.Header onClick={this.handleClick}>

              {t.driver.username}
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
            <Card.Description>{t.id}</Card.Description>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    // console.log("Card State", this.state);
    console.log("card", this.props);

    return (
      <Card fluid >
        <Card.Content extra>
          <Card.Header>
          Driver: {this.props.driver.username}
          </Card.Header>
          <Card.Description> Origin: {this.props.start_location} => Departure Time: {this.props.start_time}</Card.Description>
          <Card.Description>Destination: {this.props.end_location} => Estimated Arrival Time: {this.props.end_time}</Card.Description>
          <Card.Description>Available Seats: {this.props.available_seats}</Card.Description>
          <Card.Description>Car: {this.props.car}</Card.Description>
          <Card.Description>Rating: {this.props.rating}</Card.Description>
          <Card.Description>About this trip: {this.props.comments}</Card.Description>
          <Card.Description>Trip ID: {this.props.id}</Card.Description>
          <div className='reserve button'>
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

function mapDispatchToProps(dispatch) {
  return {
    // onSelect: trip => {
    //   dispatch(selectTriptrip));
    // },
    reserveSeat: trip => {
      dispatch(reserveSeat(trip));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripCard)
