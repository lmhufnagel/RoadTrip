import React, { Component } from "react";
import TripList from ".././components/TripList/TripList";
import TripCard from ".././components/TripList/TripCard";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { reserveSeat, selectTrip } from "../actions/trips";
class TripContainer extends Component {
  render() {
    console.log("TripContainer", this.props);
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <TripList trips={this.props.trips} onSelect={this.props.onSelect} />
          </Grid.Column>
          <Grid.Column width={9}>
            <TripCard
              trip={this.props.selectedTrip}
              onReserve={this.props.onReserve}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    trips: state.trips,
    selectedTrip: state.selectedTrip
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: trip => {
      dispatch(selectTrip(trip));
    },
    onAdd: trip => {
      dispatch(reserveSeat(trip));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
