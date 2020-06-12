import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './user-form-styles.sass'

class AddUser extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      onChangeFirstName,
      onChangeLastName,
      onChangePhoneNo,
      onChangeEmail,
      onChangeNIC,
      onSubmitAdd
    } = this.props

    return (
      <div>
        <Form onSubmit={onSubmitAdd}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Enter First Name' type='text' onChange={onChangeFirstName} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Enter Last Name' type='text' onChange={onChangeLastName} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridPhoneNo'>
              <Form.Label>Phone No</Form.Label>
              <Form.Control placeholder='Enter Phone No' type='text' onChange={onChangePhoneNo} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email' type='email' onChange={onChangeEmail} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridNIC'>
              <Form.Label>NIC</Form.Label>
              <Form.Control placeholder='Enter NIC' type='text' onChange={onChangeNIC} required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddUser
