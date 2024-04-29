import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const element1=(
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const reactElement=React.createElement("a",{href:"https://google.com" ,target:'_blank'},"Google")

ReactDOM.createRoot(document.getElementById('root')).render(
  // element1
  // reactElement
  <React.StrictMode>
    {
     <>
     <App />
      <MyApp />
     </> 
    
    }
  </React.StrictMode>,
)
