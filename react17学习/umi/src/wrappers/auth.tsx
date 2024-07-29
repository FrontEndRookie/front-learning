import React from 'react'
import { Redirect } from 'umi'

export default function Auth(props:any) {
    if(localStorage.getItem('token')){
        return (
            <div>auth</div>
        )}
  else {
    return <Redirect to="/login"/>
  }
}
