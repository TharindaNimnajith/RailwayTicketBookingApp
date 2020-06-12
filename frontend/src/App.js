import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EditUser from './components/user-form-edit-component/user-form-edit-component'
import AddUser from './components/user-form-component/user-form-component'
import UserList from './components/user-table-component/user-table-component'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ManageUser from './pages/manage-user-page/manage-user-page'
import ManageUserComponent from './pages/manage-user-component/manage-user-component'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={ManageUserComponent}/>
        <Route path='/manageUser' exact component={ManageUser}/>
        <Route path='/addUser' exact component={AddUser}/>
        <Route path='/editUser/:id' exact component={EditUser}/>
        <Route path='/userList' exact component={UserList}/>
      </Router>
    </div>
  )
}

export default App
