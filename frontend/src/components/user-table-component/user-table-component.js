import React, {Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import './user-table-styles.sass'
import {proxy} from '../../conf'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: this.props.data
    }
  }

  deleteUser = id => {
    axios.delete(`${proxy}user/${id}`).then(res => {
      console.log(res.data)
    }).catch(error => {
      console.log(error)
    })
    this.setState({
      users: this.state.users.filter(user => user._id !== id)
    })
  }

  render() {
    const {
      userId,
      updateUser,
      removeUser
    } = this.props

    return (
      <div>
        <Table responsive striped bordered hover variant='dark'>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>NIC</th>
            <th/>
            <th/>
          </tr>
          </thead>
          <tbody>
          {
            this.state.users.map(user => (
              <tr key={user._id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phoneNo}</td>
                <td>{user.email}</td>
                <td>{user.nic}</td>
                <td>
                  <Button variant={'primary'} href={updateUser}>Edit</Button>
                </td>
                <td>
                  <Button variant={'danger'} onClick={removeUser}>Delete</Button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UserList
