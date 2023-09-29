import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'



const cart = []
const Cart = () => {
  return (
    <div>
      
      <h1>Tu carrito</h1>
      
      {
      cart.lenght > 0? 
      <Form /> :
      <Link to={'/'}>
      <button>Regresar</button>
      </Link>
      }

    </div>
  )
}

export default Cart