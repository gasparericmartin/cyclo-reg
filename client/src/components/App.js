import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Project Client</h1>;
      <Outlet />
    </>
  )  
}

export default App;
