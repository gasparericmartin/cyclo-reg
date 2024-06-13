import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './NavBar'

function App() {
  const [races, setRaces] = useState([])
  const [regs, setRegs] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5555/races')
    .then(r => {
      if (r.ok) {
        r.json().then(data => setRaces(data))
      }
      else {
        r.json().then((errorObj) => setError(errorObj.error))
      }
    })
    
  }, [])

  useEffect(() => {
    fetch('http://localhost:5555/registrations')
    .then(r => {
      if (r.ok) {
        r.json().then(data => setRegs(data)) 
      }
      else {
        r.json().then((errorObj) => setError(errorObj.error))
      }
      
    })
    
  }, [])

  
  return (
    <>
      <h1 className='title'>CycloReg</h1>
      <NavBar />
      {error ? <h2>{error}</h2> : null}
      <Outlet context={{races, setRaces, regs, setRegs}}/>
    </>
  )  
}

export default App;
