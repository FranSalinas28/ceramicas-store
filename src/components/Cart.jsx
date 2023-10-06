import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Card } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { Button, SimpleGrid, Text } from '@chakra-ui/react'


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
      
      <SimpleGrid columns={3} spacing={10}>

        {cart.map((productos =>
          <>
            <Card>
              <CartItem key={productos.id} {...productos} />
            </Card>
          </>

        ))}
        </SimpleGrid>
        <br/>
        <Text fontSize='xl' color='grey' ml='5' >Total: ${total}</Text>
        <Text fontSize='xl' color='grey' ml='5'>cantidad: {totalProd} </Text>
        <br/>


        <Button color='purple' m='5' onClick={() => clearCart()}>Vaciar carro</Button>

        
        <Link to={'/Form'}>
          <Button color='purple'>Comprar</Button>
        </Link>
        


      
    </>
  )
}

export default Cart