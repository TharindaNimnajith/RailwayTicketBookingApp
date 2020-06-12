import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {proxy} from '../../conf'
import AddUserComponent from '../../components/add-user-component/add-user-component'
import ListUserComponent from '../../components/list-user-component/list-user-component'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class ManageUserComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      nic: '',
      editingUserId: '',
      editingUser: null,
      editUser: false
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get(`${proxy}user`).then(res => {
      this.setState({
        users: res.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  onChangePhoneNo = event => {
    this.setState({
      phoneNo: event.target.value
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  onChangeNIC = event => {
    this.setState({
      nic: event.target.value
    })
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      nic: this.state.nic
    }
    axios.post(`${proxy}user`, user)
      .then(() => {
        this.getUsers()
        this.setState({
          firstName: '',
          lastName: '',
          phoneNo: '',
          email: '',
          nic: ''
        })
      }).catch(error => {
      console.log(error)
    })
  }

  deleteUser = userId => {
    axios.delete(`${proxy}user/${userId}`)
      .then(() => {
        this.getUsers()
      }).catch(error => {
      console.log(error)
    })
  }

  onSubmitEdit = userId => {
    axios.get(`${proxy}user/${userId}`)
      .then(res => {
        this.setState({
          editingUserId: userId,
          editingUser: res.data
        })
        this.setState({
          editUser: true,
          firstName: this.state.editingUser.firstName,
          lastName: this.state.editingUser.lastName,
          phoneNo: this.state.editingUser.phoneNo,
          email: this.state.editingUser.email,
          nic: this.state.editingUser.nic
        })
      }).catch(error => {
      console.log(error)
    })
  }

  onSubmitUpdate = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      nic: this.state.nic
    }
    axios.put(`${proxy}user/${this.state.editingUserId}`, user)
      .then(() => {
        this.getUsers()
        this.setState({
          firstName: '',
          lastName: '',
          phoneNo: '',
          email: '',
          nic: '',
          editingUserId: '',
          editingUser: null,
          editUser: false
        })
      }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='container'>
        <h1 style={{
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '50px',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          color: 'darkblue'
        }}>
          Manage Users
        </h1>
        <Row>
          <Col sm='3'>
            <AddUserComponent onChangeFirstName={this.onChangeFirstName}
                              onChangeLastName={this.onChangeLastName}
                              onChangePhoneNo={this.onChangePhoneNo}
                              onChangeEmail={this.onChangeEmail}
                              onChangeNIC={this.onChangeNIC}
                              onSubmitAdd={this.onSubmitAdd}
                              onSubmitUpdate={this.onSubmitUpdate}
                              editUser={this.state.editUser}
                              firstName={this.state.firstName}
                              lastName={this.state.lastName}
                              phoneNo={this.state.phoneNo}
                              email={this.state.email}
                              nic={this.state.nic}/>
          </Col>
          <Col sm='9'>
            <ListUserComponent users={this.state.users}
                               onSubmitEdit={this.onSubmitEdit}
                               deleteUser={this.deleteUser}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ManageUserComponent
