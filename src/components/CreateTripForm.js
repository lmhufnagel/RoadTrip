import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createTrip } from '../actions/trips.js'

const location_options = [
  { key: 'NYC', text: 'New York, NY', value: 'New York, NY' },
  { key: 'BOS', text: 'Boston, MA', value: 'Boston, MA' },
  { key: 'DC', text: 'Washington, DC', value: 'Washington, DC' },
  { key: 'PHIL', text: 'Philidelphia, PA', value: 'Philidelphia, PA' }
]

const month = [{key: 'Jan', text: 'Jan', value:'Jan'}, {key: 'Feb', text: 'Feb', value:'Feb'},
{key: 'Mar', text: 'Mar', value:'Mar'}, {key: 'Apr', text: 'Apr', value:'Apr'},
{key: 'May', text: 'May', value:'May'}, {key: 'Jun', text: 'Jun', value:'Jun'},
{key: 'Jul', text: 'Jul', value:'Jul'}, {key: 'Aug', text: 'Aug', value:'Aug'},
 {key: 'Sept', text: 'Sept', value:'Sept'}, {key: 'Oct', text: 'Oct', value:'Oct'},
 {key: 'Nov', text: 'Nov', value:'Nov'}, {key: 'Dec', text: 'Dec', value:'Dec'}]

 const day = [{key: '1', text: '1', value:'1'},{key: '2', text: '2', value:'2'},{key: '3', text: '3', value:'3'},
 {key: '4', text: '4', value:'4'},{key: '5', text: '5', value:'5'},{key: '6', text: '6', value:'6'},
 {key: '7', text: '7', value:'7'}, {key: '8', text: '8', value:'8'}, {key: '9', text: '9', value:'9'},
 {key: '10', text: '10', value:'10'}, {key: '11', text: '11', value:'11'}, {key: '12', text: '12', value:'12'},
 {key: '13', text: '13', value:'13'}, {key: '14', text: '14', value:'14'}, {key: '15', text: '15', value:'15'},
 {key: '16', text: '16', value:'16'}, {key: '17', text: '17', value:'17'}, {key: '18', text: '18', value:'18'},
 {key: '19', text: '19', value:'19'}, {key: '20', text: '20', value:'20'}, {key: '21', text: '21', value:'21'},
 {key: '22', text: '22', value:'22'}, {key: '23', text: '23', value:'23'}, {key: '24', text: '24', value:'24'},
 {key: '25', text: '25', value:'25'}, {key: '26', text: '26', value:'26'}, {key: '27', text: '27', value:'27'},
 {key: '28', text: '28', value:'28'}, {key: '29', text: '29', value:'29'}, {key: '30', text: '30', value:'30'},
 {key: '31', text: '31', value:'31'}]

 const time = [{key: '1:00', text: '1:00', value:'1:00'}, {key: '1:30', text: '1:30', value:'1:30'},
  {key: '2:00', text: '2:00', value:'2:00'}, {key: '2:30', text: '2:30', value:'2:30'},
 {key: '3:00', text: '3:00', value:'3:00'}, {key: '3:30', text: '3:30', value:'3:30'},
 {key: '4:00', text: '4:00', value:'4:00'},  {key: '4:30', text: '4:30', value:'4:30'},
 {key: '5:00', text: '5:00', value:'5:00'}, {key: '5:30', text: '5:30', value:'5:30'},
 {key: '6:00', text: '6:00', value:'6:00'}, {key: '6:30', text: '6:30', value:'6:30'},
 {key: '7:00', text: '7:00', value:'7:00'}, {key: '7:30', text: '7:30', value:'7:30'},
 {key: '8:00', text: '8:00', value:'8:00'}, {key: '8:30', text: '8:30', value:'8:30'},
 {key: '9:00', text: '9:00', value:'9:00'},  {key: '9:30', text: '9:30', value:'9:30'},
 {key: '10:00', text: '10:00', value:'10:00'},  {key: '10:30', text: '10:30', value:'10:30'},
 {key: '11:00', text: '11:00', value:'11:00'}, {key: '11:30', text: '11:30', value:'11:30'},
 {key: '12:00', text: '12:00', value:'12:00'}, {key: '12:30', text: '12:30', value:'12:30'}]

 const am_pm = [{key: 'am', text: 'am', value:'am'}, {key: 'pm', text: 'pm', value:'pm'}]


class CreateTripForm extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    start_location: "",
    start_month: "",
    start_day: "",
    start_time: "",
    start_am_pm: "",
    end_location: "",
    end_time: "",
    end_am_pm: "",
    stops: false,
    car: "",
    available_seats: 0,
    seat_price: 0,
    duration: "",
    comments: ""
  }

 handleUsernameChange = (e, { value }) => this.setState({ username: value })
 handleFirstNameChange = (e, { value }) => this.setState({ first_name: value })
 handleLastNameChange = (e, { value }) => this.setState({ last_name: value })
 handleStartLocationChange = (e, { value }) => this.setState({ start_location: value })
 handleStartMonthChange = (e, { value }) => this.setState({start_month: value})
 handleStartDayChange = (e, { value }) => this.setState({start_day: value})
 handleStartTimeChange = (e, { value }) => this.setState({start_time: value})
 handleStartAmPmChange = (e, { value }) => this.setState({start_am_pm: value})
 handleEndLocationChange = (e, { value }) => this.setState({ end_location: value })
 handleEndTimeChange = (e, { value }) => this.setState({end_time: value})
 handleEndAmPmChange = (e, { value }) => this.setState({end_am_pm: value})
 handleCarChange = (e, { value }) => this.setState({ car: value })
 handleStopsChange = (e, { value }) => this.setState({ stops: value })
 handleAvailSeatsChange = (e, { value }) => this.setState({ available_seats: value })
 handleAvailSeatPriceChange = (e, { value }) => this.setState({ seat_price: value })
 handleDurationChange = (e, { value }) => this.setState({ duration: value })
 handleCommentsChange = (e, { value }) => this.setState({ comments: value })

 handleSubmit = (e) => {
     e.preventDefault()
     const tripObj = {trip: {
       driver_username: this.state.username,
       driver_name: this.state.first_name + " " + this.state.last_name,
       start_location: this.state.start_location,
       start_time: this.state.start_month + " " + this.state.start_day + ", " + this.state.start_time + this.state.start_am_pm,
       end_location: this.state.end_location,
       end_time: this.state.end_time + this.state.end_am_pm,
       stops: this.state.stops,
       car: this.state.car,
       available_seats: this.state.available_seats,
       seat_price:this.state.seat_price,
       duration: this.state.duration,
       comments: this.state.comments,
       driver_id: 1
      }
    }
    //  tripObj.trip.owner_id = this.props.currentUser.id
     console.log(tripObj);
     this.props.createTrip(tripObj)
   }

  //  componentDidUpdate = () => {
  //    if (this.props.) {
  //      this.setState({redirectToTripList: `/trips/${this.props.trips}`})
  //    }
  //  }

 render() {
   const { value } = this.state
   return (
     <Form onSubmit={this.handleSubmit}>
      
      <Form.Group widths='equal'>
        <Form.Select  label='Depart' options={location_options} placeholder='Depart From' onChange={this.handleStartLocationChange}/>
        <Form.Select  label='Departure Month' options={month} placeholder='Select' onChange={this.handleStartMonthChange}/>
        <Form.Select label='Day' options={day} placeholder='Select' onChange={this.handleStartDayChange}/>
        <Form.Select  label='Time' options={time} placeholder='Select' onChange={this.handleStartTimeChange}/>
        <Form.Select  label='am/pm' options={am_pm} placeholder='Select' onChange={this.handleStartAmPmChange}/>
       </Form.Group>
       <Form.Group widths='equal'>
        <Form.Select  label='Destination' options={location_options} placeholder='Destination' onChange={this.handleEndLocationChange}/>
        <Form.Select  label='Arrival Time' options={time} placeholder='Select' onChange={this.handleEndTimeChange}/>
        <Form.Select  label='am/pm' options={am_pm} placeholder='Select' onChange={this.handleEndAmPmChange}/>
       </Form.Group>
       <Form.Group inline>
          <label>Willing to make stops along the way?</label>
          <Form.Radio label='Yes' value='true' checked={value === 'true'} onChange={this.handleChange} />
          <Form.Radio label='No' value='false' checked={value === 'false'} onChange={this.handleChange} />
        </Form.Group>
       <Form.Group widths='equal'>
        <Form.Input  label='Car Make/Model' placeholder='' onChange={this.handleCarChange}/>
       </Form.Group>
       <Form.Group widths='equal'>
        <Form.Input  label='Seats Available' placeholder='' onChange={this.handleAvailSeatsChange}/>
        <Form.Input  label='Seat Price' placeholder='$' onChange={this.handleAvailSeatPriceChange}/>
        <Form.Input  label='Estimated length of trip' placeholder='in hours' onChange={this.handleDurationChange}/>
       </Form.Group>
       <Form.TextArea  label='Comments' placeholder='Anything else your riders should know? Music preferences, will you make stops...' onChange={this.handleCommentsChange}/>
       <Form.Button>Submit</Form.Button>
     </Form>
   )
 }
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.user.currentUser,
//     isLoading: state.trips.isLoading
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return ({
    createTrip: (tripObj) => dispatch(createTrip(tripObj))
  })
}

export default connect(null, mapDispatchToProps)(CreateTripForm)
