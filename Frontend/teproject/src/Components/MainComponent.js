import React from 'react'
import { connect } from 'react-redux'
import Body from './Body/Body'
import Header from './Header/Header'
import { AUTHENTICATED, HISTORY_UPDATE } from '../Redux/ActionTypes'
import { checkAuth } from '../Functions/AuthFunctions'
import { GetHistoryApi } from '../Api/HistoryApi'
import Footer from './Footer/Footer'


const mapStateToProps = (state) => {
  return {
    decodedToken: state.decodedToken
  }

}


const MainComponent = (props) => {


  props.dispatch(AUTHENTICATED)
  if (checkAuth() && props.decodedToken._id != undefined) {
    GetHistoryApi(props.decodedToken._id).then(data => props.dispatch(HISTORY_UPDATE(data.value ? data.value : [])))
  }

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}



export default connect(mapStateToProps)(MainComponent)