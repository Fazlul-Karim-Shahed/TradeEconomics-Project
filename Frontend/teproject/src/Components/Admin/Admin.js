import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({})

const Admin = (props) => {
  return (
    <div className='text-center'>
          <h1>Hello from Admin page</h1>
    </div>
  )
}



export default connect(mapStateToProps)(Admin)