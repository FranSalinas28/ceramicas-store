import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const Cart = () => {
const { cart, clearCart, totalProd, total} = useContext(CartContext)

if(totalProd === 0) {
  return(
    <div>
      <h1>No hay productos en el carrito</h1>
      <Link to={'/'}>
      <button>Productos</button>
      </Link> 
      


    </div>
  )
}

  return (
    <div>
      
      { cart.map((productos => 
      <>
      <CartItem key={productos.id} {...productos}/>
      <h3>Total: ${total}</h3>
      <h4>cantidad:{totalProd} </h4>

      <button onClick={()=> clearCart()}>Vaciar carro</button>
      <Link to={Form}>Comprar</Link>


      </>

      ))}
      
     

    </div>
  )
}

export default Cart