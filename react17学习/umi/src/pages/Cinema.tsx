import React, { Component } from 'react'
import { NavBar, Toast } from 'antd-mobile'
export default class Cinema extends Component {
  render() {
    const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })
    return (
      <div>
        <NavBar onBack={back}>标题</NavBar>
        Cinema
      </div>
    )
  }
}
