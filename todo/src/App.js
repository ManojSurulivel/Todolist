import Apptodo from "./Apptodo.js"
import React from 'react'
//import "./App.css"

const App = () => {

  // const handlenameChange=()=>{
  //   const names=['bike','car','lorry'];
  //   const init= Math.floor(Math.random()*3);
  //   return names[init]
  // }

  // const[count,setCount]=useState(0)
  return (
    <div>
      {/* <h1 className='app'> Count: {count} </h1>

      <button onClick={()=>setCount(count+1)}>+</button>

      <p>hello {handlenameChange()} youtube</p> */}
      <Apptodo/>
    </div>
  )
}

export default App
