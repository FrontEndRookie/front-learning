import React, { Component } from 'react'
import { withRouter } from 'dva/router'
class Child extends Component {
  render(){
    return (
    <button onClick={()=>{}}></button>
    )
  }
}
const RouterChild = withRouter(Child)
export default class cinema extends Component {
  render() {
    return (
      <div>cinema
       <RouterChild></RouterChild>
      </div>
    )
  }
}
