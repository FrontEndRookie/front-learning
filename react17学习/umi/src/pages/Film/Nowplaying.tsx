import React, { Component, useEffect, useState } from 'react'
import { useHistory } from 'umi'
export default function Nowplaying(props:any) {
    const [list, setList] = useState([])
    const history = useHistory()
    useEffect(()=>{
        fetch('https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=2051679',
        {
            headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16622893841602740060946433"}',
            'X-Host': 'mall.film-ticket.film.list'
        }}).then(res=>res.json()).then(res=>{console.log(res.data.films);setList(res.data.films)})
    },[])
    return (
      <div>
        {list.map((item:any)=>{
            return <li key={item.filmId} onClick={()=>{
              history.push(`/detail/${item.filmId}`)
            }}>{item.name}</li>
        })}
      </div>
    )
}
