import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './NavBar'

function App() {
  const [races, setRaces] = useState([])
  const [regs, setRegs] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/races')
    .then(r => r.json())
    .then(data => setRaces(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5555/registrations')
    .then(r => r.json())
    .then(data => setRegs(data))
  }, [])

  
  return (
    <>
      <h1>Project Client</h1>
      <NavBar />
      <Outlet context={{races, setRaces, regs, setRegs}}/>
    </>
  )  
}

export default App;
