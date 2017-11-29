import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
const TripShow = props => {
  const handleClick = () => {
    props.onReserve(props.trip);
  };
  return (
    <div>
      {props.trip.title ? (
        <Card>
          <Card.Content>
            <Card.Header>{props.trip.title}</Card.Header>
            <Card.Meta>
              <span className="location">{this.props.trip.start_location}</span>
            </Card.Meta>
            <Card.Description>{this.props.trip.start_location}</Card.Description>
            <Card.Description>{this.props.trip.end_location}</Card.Description>
            <Card.Description>{this.props.trip.start_time}</Card.Description>
            <Card.Description>{this.props.trip.end_time}</Card.Description>
          <Card.Content extra onClick={handleClick}>
            <Icon name="seat" />
            Reserve a seat
          </Card.Content>
        </Card>
      ) : null}
    </div>
  );
};

export default TripShow;

// import React, { Component } from 'react';
// // import MapContainer from './map/MapContainer';
// import { connect } from 'react-redux';
// import { Button, Form, Grid, Select, Card } from 'semantic-ui-react';
// import { filterTrips } from './actions/trips.js'
// import List from './List.js'
// import { locationOptions } from './helpers/filterOptions'
//
//
// class TripListContainer extends Component {
//
//   state = {
//     start_location: "",
//     end_location: "",
//   }
//
//   handleInputStartChange = (event, data) => {
//     this.setState({
//       start_location: data.value
//     })
//   }
//
//   handleInputEndChange = (event, data) => {
//     this.setState({
//       end_location: data.value
//     })
//   }
//
//   handleSubmit = () => {
//     this.props.sortedByDayAndNeighborhood(this.state.dayInput, this.state.neighborhoodInput, this.props.venues)
//   }
//
//
//   render() {
//     return (
//       <Grid className="form-wrapper" stackable columns={3} divided>
//         <Grid.Row>
//           <Grid.Column width={4}>
//             <Card >
//               <Card.Content>
//                 <Form className="search-form-wrapper">
//                   <Form.Field  >
//                     <label htmlFor="day" className="day-label">Day of the Week</label>
//                     <Select
//                       name="day"
//                       id="day"
//                       onChange={this.handleInputDayChange}
//                       value={this.state.dayInput}
//                       placeholder='Day'
//                       options={dayOptions}
//                     />
//                   </Form.Field>
//                   <Form.Field>
//                     <label htmlFor="neighborhood" className="neighborhood-label">Where</label>
//                     <Select
//                       name="neighborhood"
//                       id="neighborhood"
//                       onChange={this.handleInputNeighborhoodChange}
//                       value={this.state.neighborhoodInput}
//                       placeholder='Neighborhood'
//                       options={neighborhoodOptions}
//                     />
//                   </Form.Field>
//                   <Button type="submit" onClick={this.handleSubmit} className="form-button">Search</Button >
//                 </Form>
//               </Card.Content>
//             </Card>
//           </Grid.Column>
//           <Grid.Column width={12}>
//             <MapContainer />
//           </Grid.Column>
//         </Grid.Row>
//         <List />
//       </Grid>
//     );
//   }
// }
//
// function mapStateToProps(state){
//   return ({
//     venues: state.venues,
//     isLoading: state.isLoading,
//     currentVenues: state.currentVenues
//   })
// }
//
// const mapDispatchToProps = {
//   sortedByDayAndNeighborhood,
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
