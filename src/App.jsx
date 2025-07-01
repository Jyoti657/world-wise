import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import AppLayout from './Pages/AppLayout'
import Products from './Pages/ProductsPages'

const App = () => {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePages/>}/>
    <Route path='/product' element ={<Products/>}/>
    <Route path='/app' element={<AppLayout/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
