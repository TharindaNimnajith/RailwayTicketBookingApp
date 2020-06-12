import React, {Component} from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './user-form-edit-styles.sass'
import {proxy} from '../../conf'

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      nic: ''
    }
  }

  componentDidMount() {
    axios.get(`${proxy}user/${this.props.match.params.id}`).then(res =>
      this.setState({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        phoneNo: res.data.phoneNo,
        email: res.data.email,
        nic: res.data.nic
      })).catch(error =>
      console.log(error)
    )
  }

  render() {
    const {
      editUserId,
      onChangeFirstName,
      onChangeLastName,
      onChangePhoneNo,
      onChangeEmail,
      onChangeNIC,
      onSubmitEdit
    } = this.props

    return (
      <div>
        <Form onSubmit={onSubmitEdit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Enter First Name' type='text' value={this.state.firstName}
                            onChange={onChangeFirstName} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Enter Last Name' type='text' value={this.state.lastName}
                            onChange={onChangeLastName} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridPhoneNo'>
              <Form.Label>Phone No</Form.Label>
              <Form.Control placeholder='Enter Phone No' type='text' value={this.state.phoneNo}
                            onChange={onChangePhoneNo} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email' type='email' value={this.state.email}
                            onChange={onChangeEmail} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridNIC'>
              <Form.Label>NIC</Form.Label>
              <Form.Control placeholder='Enter NIC' type='text' value={this.state.nic}
                            onChange={onChangeNIC} required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary' type='submit'>
            Edit
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditUser
