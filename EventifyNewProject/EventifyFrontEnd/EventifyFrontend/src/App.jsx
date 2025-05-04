import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import UserListComponent from './Components/UserListComponent'
import FooterComponent from './Components/FooterComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent/>
      <UserListComponent />
      <FooterComponent/>
    </>
  )
}

export default App
