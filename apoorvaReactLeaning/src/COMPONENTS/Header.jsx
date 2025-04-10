import React from 'react'
import Apoorva from './Apoorva'

export default function Header({children}) {
  return (
    <div>Header- 
        <Apoorva/>
        {children}
    </div>
  )
}
