import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { Button } from '@chakra-ui/react'


const Cart = () => {
  const { cart, clearCart, total, totalProd } = useContext(CartContext)
 

 
  if (totalProd === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to={'/'}>
          <Button>Productos</Button>
        </Link>




      </div>
    )
  }

  return (
    <>
      <div>

        {cart.map((productos =>
          <>
            <Card>
              <CartItem key={productos.id} {...productos} />
            </Card>
          </>

        ))}
        <h3>Total: ${total}</h3>
        <h4>cantidad:{totalProd} </h4>

        <Button onClick={() => clearCart()}>Vaciar carro</Button>

        
        <Link to={'/Form'}>
          <Button>Comprar</Button>
        </Link>


      </div>
    </>
  )
}

export default Cart