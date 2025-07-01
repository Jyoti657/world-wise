import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import AppLayout from './Pages/AppLayout'
import Products from './Pages/ProductsPages'
import LoginPages from './Pages/LoginPages'

const App = () => {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePages/>}/>
    <Route path='/product' element ={<Products/>}/>
    <Route path='/app' element={<AppLayout/>}/>
    <Route path='login' element={<LoginPages/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
