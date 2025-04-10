import './App.css'
import React, { useEffect, useState } from 'react';
import Header from './COMPONENTS/Header';
import Footer from './COMPONENTS/Footer'
import usercomponent from './usercomponent';
function App() {
  const[data,setdata] = useState({})
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => setdata(json.products[0]))
  },[])
  console.log(data)
  return (
    <div>
      <usercomponent.Provider value = {{data,setdata}} >
        <Header>
          <p>hlo here is apoorva dear</p>
          <p>nice to meet you all</p>
        </Header>
        <Footer/>
      </usercomponent.Provider>

    </div>
  )
}

export default App;
