import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserList from '../../components/user-table-component/user-table-component'
import AddUser from '../../components/user-form-component/user-form-component'
import axios from 'axios'
import {proxy} from '../../conf'

class ManageUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      nic: '',
      editUser: false,
      editUserId: '',
      users: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
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
      .then(res => {
        this.setState({
          firstName: '',
          lastName: '',
          phoneNo: '',
          email: '',
          nic: '',
        })
        this.getData()
        console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  onSubmitEdit = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      nic: this.state.nic
    }
    axios.put(`${proxy}user/${this.state.editUserId}`, user).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='categoryMain container' style={{maxWidth: '1300px'}}>
        <h1>Manage Users</h1>
        <Row style={{maxWidth: '1300px'}}>
          <Col sm='4'>
            <div className='categoryForm'>
              <AddUser onChangeFirstName={this.onChangeFirstName}
                       onChangeLastName={this.onChangeLastName}
                       onChangePhoneNo={this.onChangePhoneNo}
                       onChangeEmail={this.onChangeEmail}
                       onChangeNIC={this.onChangeNIC}
                       onSubmitAdd={this.onSubmitAdd}/>
            </div>
          </Col>
          <Col sm='8'>
            <div className='userList'>
              <UserList data={this.state.users}
                        updateUser={this.updateUser}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ManageUser
