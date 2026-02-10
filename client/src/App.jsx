import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(0)
  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])
  return (
    <>
      <h1>Welcome to Gautamkaran</h1>
      <h3>Data: {message}</h3>
    </>
  )
}

export default App
