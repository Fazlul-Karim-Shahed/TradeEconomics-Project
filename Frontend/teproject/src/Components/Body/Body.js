import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router'
import Admin from '../Admin/Admin'
import About from './About/About'
import Compare from './Compare/Compare'
import Signin from './Login/Signin'
import Signup from './Login/Signup'
import Logout from './Logout/Logout'


const mapStateToProps = (state) => {


  return {
    role: state.role
  }
}


const Body = (props) => {


  let admin = ''

  if (props.role === 'admin') {
    admin =
      <Route path='/admin-panel'>
        <Route path='' element={<Admin />} />
        <Route path='second-admin' element={<h1 className='text-center'>Welcome to second admin page</h1>} />
        <Route path='third-admin' element={<h2 className='text-center'>Another third admin page</h2>} />
      </Route>
  }


  return (
    <div>
      <Routes>
        <Route path='/' element={<Compare />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<h1>Sorry page not found</h1>} />
        {admin}
      </Routes>

    </div>
  )
}



export default connect(mapStateToProps)(Body)