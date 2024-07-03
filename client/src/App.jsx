import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')

  const handleClick = () => {
    axios.get(`https://hosting-test-server.onrender.com/driver/${number}`).then((res) => {
      setName(res.data)
    })
  }

  return (
    <>
      <h1>F1 Drivers</h1>
      <div>
        <input type="text" 
          placeholder='Driver Number' 
          value={number} onChange={(e) => 
          setNumber(e.target.value)} 
        />
        <button onClick={handleClick}>Find Driver</button>
      </div>
      <p>{name}</p>
    </>
  )
}

export default App
