import React, { Component } from "react";
import TripList from "../components/TripList/TripList";
import TripCard from ".././components/TripList/TripCard";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchTrips, reserveSeat, selectTrip } from "../actions/trips";
class TripContainer extends Component {
  state = {
    SelectedTrip: false
  }


  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    console.log("TRIPCONTAINER", this.props.trips);

    return (
      <div>
        <TripList />
      </div>
    )
  }


}

function mapStateToProps(state) {
  console.log(state);
  return {
    trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: (trips) => dispatch(fetchTrips(trips))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
