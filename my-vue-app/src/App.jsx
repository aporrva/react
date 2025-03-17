import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { my } from './my'

function App() {
  const [inputtedValue, newInputtedValue] = useState("")
  const [myItemsList, newItemsList] = useState([])
  const [edit, changebeingedit] = useState(false)
  const[ editdivs , changeeditdivs] = useState(false)
  function AddButtonClicked() {
    newItemsList([...myItemsList, { id: myItemsList.length + 1, name: inputtedValue }])
    newInputtedValue("")
  }
  function editThevaluebuttonclicked(item) {
    newInputtedValue(myItemsList[item.id - 1].name)
  }
  function editButtonClicked() {
    
  }
  return (
    <div>
      <input value = {inputtedValue} onInput={(e) => {
        newInputtedValue(e.target.value)
      }} type="text" />
      <div>
        {edit ? <button onClick={editButtonClicked}>Edit</button> :<button onClick={AddButtonClicked}>Add</button> }
      
      </div>
      {myItemsList.map((item) => {
        return <div key={item.id }>
          <div>{item.name}</div>
          <button onClick={() => {
            let spareList = myItemsList.filter((oho) => {
              if (item.id !== oho.id) {
                return true
              }
            })
            newItemsList(spareList)
          }}>X</button>
          <button key={item.id} onClick={(() => {
            changeeditdivs(true)
            editThevaluebuttonclicked(item)
            changebeingedit(true)
          })}>Edit</button>
        </div>
      })}
    </div>
  )
}

export default App
