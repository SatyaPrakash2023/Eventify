import { } from 'react'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import UserListComponent from './Components/UserListComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './Components/Signup'
import Login from './Components/Login'
import HomePage from './Components/HomePage'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Home' element={<><HeaderComponent /> <HomePage/> <FooterComponent /></>}></Route>
          <Route path='/UserList' element={<UserListComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
