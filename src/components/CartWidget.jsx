import React from 'react'
import { Image } from '@chakra-ui/react'
import icono from '../assets/carro.png'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartWidget = () => {
  //const { totalProd  } = useContext(CartContext)
  const {cart} =useContext(CartContext)
  const totalProd = cart.reduce((total, item )=> total + item.quantity,0)

  return (
    <>
    <div>  
        
        <Image 
        src={icono} 
        boxSize='35px'
        objectFit='cover'
        alt='carro'/> 

        <p> {totalProd} </p>
      
        
        </div>
    </>
  )
}

export default CartWidget