import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './NavBar'

function App() {
  const [races, setRaces] = useState([])
  const [regs, setRegs] = useState([])
  const [raceError, setRaceError] = useState(false)
  const [regError, setRegError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5555/races')
    .then(r => {
      if (r.ok) {
        r.json().then(data => setRaces(data))
        setRaceError(false)
      }
      else {
        r.json().then((errorObj) => setRaceError(errorObj.error))
      }
    })
    
  }, [])

  useEffect(() => {
    fetch('http://localhost:5555/registrations')
    .then(r => {
      if (r.ok) {
        r.json().then(data => setRegs(data)) 
        setRegError(false)
      }
      else {
        r.json().then((errorObj) => setRegError(errorObj.error))
      }
      
    })
    
  }, [])

  
  return (
    <>
      <h1 className='title'>CycloReg</h1>
      <NavBar />
      {raceError ? <h2>Races Error: {raceError}</h2> : null}
      {regError ? <h2>Registrations Error: {regError}</h2>: null}

      <Outlet context={{races, setRaces, regs, setRegs, setRaceError}}/>
    </>
  )  
}

export default App;
