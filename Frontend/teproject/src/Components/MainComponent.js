import React from 'react'
import { connect } from 'react-redux'
import Body from './Body/Body'


const mapStateToProps = (state) => {

  console.log(state)

  return{

  }
}


const MainComponent = (props) => {
  return (
    <div>
        <Body />
    </div>
  )
}



export default connect(mapStateToProps)(MainComponent)