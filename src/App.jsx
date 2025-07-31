import React from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"

function App() {
  

  return (
    <>
      <Sidebar />
      <div>
        <Dashboard/>
      </div>
    </>
  )
}

export default App
