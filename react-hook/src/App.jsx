import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Header from './header'
import Mid from './Mid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Mid/>
      <Footer/>
    </div>
  )
}

export default App
