import React, { Component } from "react";
import TripList from "../components/TripList/TripList";
import TripCard from ".././components/TripList/TripCard";
import { Grid, Form, Button, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchTrips, reserveSeat, selectTrip, searchStart, searchEnd, setFilteredTrips, setLastTripFiltered } from "../actions/trips";

const location_options = [
  { key: 'any', text: 'any', value: '' },
  { key: 'NYC', text: 'New York, NY', value: 'New York, NY' },
  { key: 'BOS', text: 'Boston, MA', value: 'Boston, MA' },
  { key: 'DC', text: 'Washington, DC', value: 'Washington, DC' },
  { key: 'PHIL', text: 'Philidelphia, PA', value: 'Philidelphia, PA' }
]



class TripContainer extends Component {
  state = {
    searchedTrips: [],
    searchTerm: '',
    selectedTrip: [],
    origin_option: "",
    destination_option: ""
  }

  componentDidMount() {
    this.props.fetchTrips()
  }

  handleStartLocationChange = (event, data) => {
    // console.log("data in func", data.value);
    this.setState({
      origin_option: data.value
    })
  }


  handleEndLocationChange = (event, data) => {
    this.setState({
      destination_option: data.value
    })
  }

  // componentDidMount = () => {
  //     if(this.props.lastTripFiltered.length){
  //       this.props.setFilteredTrips(this.props.lastTripFiltered)
  //       console.log("this.props.lastTripFiltered", this.props.lastTripFiltered)
  //     }
  //   }

  render() {
    console.log("TRIPCONTAINER", this.props.trips);
    console.log("origin", this.state.origin_option);

    const filteredTrips = this.props.trips.filter(trip =>{ return trip.start_location.includes(this.state.origin_option ) && trip.end_location.includes(this.state.destination_option)})


    return (
      <div>
        <Form.Group widths='equal'>

          <Form.Field>
            <label htmlFor="origin" className="start_location">Search by Origin</label>
            <Select
              name="origin"
              id="origin"
              onChange={this.handleStartLocationChange}
              value={this.state.origin_option}
              placeholder='Select'
              options={location_options}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="destination" className="end_location">Search by Destination</label>
              <Select
                name="destination"
                id="destination"
                onChange={this.handleEndLocationChange}
                value={this.state.destination_option}
                placeholder='Select'
                options={location_options}
              />
            </Form.Field>

      </Form.Group>
      <TripList trips={filteredTrips}/>
      </div>
    )
  }


}

function mapStateToProps(state) {
  console.log(state);
  return {
    trips: state.trips,
    filteredTrips: this.filteredTrips,
    lastTripFiltered:this.lastTripFiltered
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: (trips) => dispatch(fetchTrips(trips))
    }
    searchStart,
    setLastTripFiltered,
    setFilteredTrips
}



export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
