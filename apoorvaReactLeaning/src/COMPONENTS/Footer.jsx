import React, { useContext } from 'react'
import usercomponent from '../usercomponent'

export default function Footer() {
  const {data, setdata} = useContext(usercomponent)
  console.log(data)
  return (
    <div>Footer-{data?.title}

    </div>
  )
}
