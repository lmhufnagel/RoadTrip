import React, { Component } from "react";
import RideList from "../components/RideList/RideList";
import RideCard from ".././components/RideList/RideCard";
import { Grid, Form, Button, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchRides, reserveSeat, selectRide, searchStart, searchEnd, setFilteredRides, setLastRideFiltered } from "../actions/trips";

const location_options = [
  { key: 'any', text: 'any', value: '' },
  { key: 'NYC', text: 'New York, NY', value: 'New York, NY' },
  { key: 'BOS', text: 'Boston, MA', value: 'Boston, MA' },
  { key: 'DC', text: 'Washington, DC', value: 'Washington, DC' },
  { key: 'PHIL', text: 'Philidelphia, PA', value: 'Philidelphia, PA' }
]



class RideContainer extends Component {
  state = {
    searchedRides: [],
    searchTerm: '',
    selectedRide: [],
    origin_option: "",
    destination_option: ""
  }

  componentDidMount() {
    this.props.fetchRides()
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
  //     if(this.props.lastRideFiltered.length){
  //       this.props.setFilteredRides(this.props.lastRideFiltered)
  //       console.log("this.props.lastRideFiltered", this.props.lastRideFiltered)
  //     }
  //   }

  render() {
    console.log("TRIPCONTAINER", this.props.rides);
    console.log("origin", this.state.origin_option);

    const filteredRides = this.props.rides.filter(ride =>{ return ride.start_location.includes(this.state.origin_option ) && ride.end_location.includes(this.state.destination_option)})


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
      <RideList rides={filteredRides}/>
      </div>
    )
  }


}

function mapStateToProps(state) {
  console.log(state);
  return {
    rides: state.rides,
    filteredRides: this.filteredRides,
    lastRideFiltered:this.lastRideFiltered
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRides: (rides) => dispatch(fetchRides(rides))
    }
    searchStart,
    setLastRideFiltered,
    setFilteredRides
}



export default connect(mapStateToProps, mapDispatchToProps)(RideContainer);
