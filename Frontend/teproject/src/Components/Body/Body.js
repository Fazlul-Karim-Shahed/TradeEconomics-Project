import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router'
import Admin from '../Admin/Admin'
import Contact from './Contact/Contact'
import Home from './Home/Home'


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
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Sorry page not found</h1>} />

        {admin}
      </Routes>

    </div>
  )
}



export default connect(mapStateToProps)(Body)