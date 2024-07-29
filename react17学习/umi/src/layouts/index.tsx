import React from 'react'
import { NavLink } from 'umi'
import './index.less'
export default function index(props:any) {
  return (
    <div>
        index
        {props.children}
        <ul>
            <li>
                <NavLink to="/film" activeClassName='activeTab'>film</NavLink>
            </li>
            <li>
                <NavLink to="/cinema" activeClassName='activeTab'>cinema</NavLink>
            </li>
            <li>
                <NavLink to="/center" activeClassName='activeTab'>center</NavLink>
            </li>
        </ul>
    </div>
  )
}
