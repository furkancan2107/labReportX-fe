import { useState } from 'react'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import LoginPage from './auth/LoginPage'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
     </Routes>
     
    </>
  )
}

export default App
