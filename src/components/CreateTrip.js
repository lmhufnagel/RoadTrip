
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import CreateTripForm  from "./CreateTripForm"

class CreateTripContainer extends Component {

  render() {
    return (
      <div>
        <br/><br/>
        <Container>
          <Header as="h1" textAlign='center'>Have a car? Going somewhere? Add a trip!</Header>
          <CreateTripForm />
          <br/><br/>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTrip: state.rides.selectedTrip,
    // currentUser: state.user.currentUser
  }
}




export default connect(mapStateToProps)(CreateTripContainer)
