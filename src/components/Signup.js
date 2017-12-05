import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createUser } from '../actions/users.js'

class Signup extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bio: "",

  }


 handleUsernameChange = (e, { value }) => this.setState({ username: value })
 handleFirstNameChange = (e, { value }) => this.setState({ first_name: value })
 handleLastNameChange = (e, { value }) => this.setState({ last_name: value })
 handleEmailChange = (e, { value }) => this.setState({ email: value })
 handleSPasswordChange = (e, { value }) => this.setState({password: value})
 handleBioChange = (e, { value }) => this.setState({bio: value})

 handleSubmit = (e) => {
     e.preventDefault()
     const userObj = {user: this.state}
    //  userObj.user.owner_id = this.props.currentUser.id
     console.log(userObj);
     this.props.createUser(userObj)
   }

  //  componentDidUpdate = () => {
  //    if (this.props.) {
  //      this.setState({redirectToUserList: `/users/${this.props.users}`})
  //    }
  //  }

 render() {
   const { value } = this.state
   return (
     <Form onSubmit={this.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input  label='Username' placeholder='username' onChange={this.handleUsernameChange}/>
        <Form.Input label='First name' placeholder='First name' onChange={this.handleFirstNameChange}/>
        <Form.Input label='Last name' placeholder='Last name' onChange={this.handleLastNameChange}/>
       </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input  label='Email'  placeholder='yourname@gmail.com' onChange={this.handleEmailChange}/>
        <Form.Input  label='Password' placeholder='must be 3 characters' onChange={this.handlePasswordChange}/>
        <Form.TextArea label='Tell us about yourself' placeholder='...' onChange={this.handleBioChange}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
     </Form>
   )
 }
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.user.currentUser,
//     isLoading: state.users.isLoading
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return ({
    createUser: (userObj) => dispatch(createUser(userObj))
  })
}

export default connect(null, mapDispatchToProps)(Signup)
