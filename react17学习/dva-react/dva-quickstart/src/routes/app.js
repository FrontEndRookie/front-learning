import { connect } from 'dva'
import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

 class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default connect((state)=>{console.log(state)})(App)
