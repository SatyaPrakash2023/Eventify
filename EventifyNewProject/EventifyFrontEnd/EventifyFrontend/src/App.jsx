import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import UserListComponent from './Components/UserListComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './Components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/Home' element={<><HeaderComponent /> <FooterComponent /></>}></Route>
          <Route path='/UserList' element={<UserListComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
