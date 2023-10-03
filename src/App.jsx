import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'



const App = () => {


  return (
    
    <BrowserRouter>
  <ShoppingCartContext>
  <NavBar />
  <Routes> 
     <Route exact path='/' element= {<ItemListContainer/>} />
     <Route exact path='/Cart' element= {<Cart />} /> 
     <Route exact path="/Item/:id" element= {<ItemDetailContainer/>} />
     <Route path="/categoria/:categoria" element= {<ItemListContainer/>} />
  </Routes>
  </ShoppingCartContext>
  
   </BrowserRouter>

   
  )
}

export default App