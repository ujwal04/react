import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    if(counter<20){
      setCounter(++counter)
      // Interview question
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
    }
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(--counter)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
