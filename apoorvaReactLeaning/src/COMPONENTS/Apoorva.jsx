import React, { useContext } from 'react'
import usercomponent from '../usercomponent'

export default function Apoorva() {
    const {data,setdata} = useContext(usercomponent)
    console.log(data)
  return (
    <div>Apoorva
        <div>
            {data?.brand}
        </div>
    </div>
  )
}
