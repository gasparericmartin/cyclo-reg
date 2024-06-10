import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './NavBar'

function App() {
  return (
    <>
      <h1>Project Client</h1>
      <NavBar />
      <Outlet />
    </>
  )  
}

export default App;
