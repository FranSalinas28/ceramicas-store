import { MoonIcon } from '@chakra-ui/icons'
import React from 'react'
import { Image } from '@chakra-ui/react'
import icono from '../assets/carro.png'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartWidget = () => {
  const { cart, setCart, contador } = useContext(CartContext)
  //contador
  return (
    <>
    <div>  
        
        <Image 
        src={icono} 
        boxSize='35px'
        objectFit='cover'
        alt='carro'
        /> 

        <p> {contador} </p>
      
        
        </div>
    </>
  )
}

export default CartWidget