import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'



const cart = []
const Cart = () => {
  return (
    <div>Tu carrito
      
      {cart.lenght > 0? 
      <Form />

      :

      <button>Regresar</button>
      }

    </div>
  )
}

export default Cart