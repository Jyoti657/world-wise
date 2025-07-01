import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'

const App = () => {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePages/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
