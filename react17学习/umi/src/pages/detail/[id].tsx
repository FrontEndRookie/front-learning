import React from 'react'
import { useParams } from 'umi'
interface IParams {
    id:string
}
export default function detail(props:any) {
    const params = useParams<IParams>()
    console.log(props,params.id)

  return (
    <div>

    </div>
  )
}
