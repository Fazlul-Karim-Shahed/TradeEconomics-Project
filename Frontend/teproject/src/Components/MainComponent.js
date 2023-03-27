import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import Body from './Body/Body'
import Header from './Header/Header'



const mapStateToProps = (state) => {

  return {
    role: state.role
  }

}


const MainComponent = (props) => {


  let { pathname } = useLocation()
  console.log(pathname)


  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}



export default connect(mapStateToProps)(MainComponent)