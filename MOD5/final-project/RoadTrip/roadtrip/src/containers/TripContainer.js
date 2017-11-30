import React, { Component } from "react";
import TripList from ".././components/TripList/TripList";
import TripCard from ".././components/TripList/TripCard";
import TripListContainer from ".././components/TripList/TripListContainer";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchTrips, reserveSeat, selectTrip } from "../actions/trips";
class TripContainer extends Component {
  state = {
    SelectedTrip: false
  }


  componentDidMount() {
    this.props.fetchTrips(this.props.trips)
  }

  render() {
    console.log(this.props.trips);
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <TripList trips={this.props.trips} selectTrip={this.props.onSelect} />
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
    trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: (trips) => dispatch(fetchTrips(trips))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
