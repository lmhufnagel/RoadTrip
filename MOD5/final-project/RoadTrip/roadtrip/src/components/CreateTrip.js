import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'NYC', text: 'New York, NY', value: 'New York, NY' },
  { key: 'BOS', text: 'Boston', value: 'Boston' },
  { key: 'DC', text: 'Washington, DC', value: 'Washington, DC' },
  { key: 'PHIL', text: 'Philidelphia, PA', value: 'Philidelphia, PA' }
]

class CreateTrip extends Component {
  state = {}

 handleChange = (e, { value }) => this.setState({ value })

 render() {
   const { value } = this.state
   return (
     <Form>
       <Form.Group widths='equal'>
         <Form.Input label='Driver First name' placeholder='First name' />
         <Form.Input label='Driver Last name' placeholder='Last name' />
       </Form.Group>
       <Form.Group widths='equal'>
         <Form.Select label='Depart' options={options} placeholder='Depart From' />
         <Form.Select label='Departure Time' options={options} placeholder='Select' />
         <Form.Select label='Destination' options={options} placeholder='Destination' />
         <Form.Select label='Arrival Time' options={options} placeholder='Select' />
       </Form.Group>
       <Form.Group widths='equal'>
         <Form.Input label='Car Make/Model' placeholder='' />
       </Form.Group>
       <Form.Group widths='equal'>
         <Form.Input label='Seats Available' placeholder='' />
         <Form.Input label='Estimated length of trip' placeholder='in hours' />
       </Form.Group>
       <Form.TextArea label='Comments' placeholder='Anything else your riders should know? Music preferences, will you make stops...' />
       <Form.Checkbox label='I agree to the Terms and Conditions' />
       <Form.Button>Submit</Form.Button>
     </Form>
   )
 }
};

export default CreateTrip;
