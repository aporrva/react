import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import Header from './Header';
import Footer from './Footer';

function App() {

  const [usernam, newname] = useState("")
  function apoorva(e) {
    newname(e.target.value)
  }
  return (
    <div className="">
      <Header name={usernam}/>
      <main className="p-8">
        <input
          className="px-2 py-1 text-xl border border-gray-800 rounded-lg"
          type="text"
          placeholder="Enter your name"
          onInput={apoorva}
          />
      </main>
      <Footer name={usernam} />
    </div>
  );
}

export default App;
