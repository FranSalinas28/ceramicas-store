import { MoonIcon } from '@chakra-ui/icons'
import React from 'react'
import { Image } from '@chakra-ui/react'
import icono from '../assets/carro.png'


const CartWidget = () => {
  return (
    <>
    <div>  
        
        <Image 
        src={icono} 
        boxSize='35px'
        objectFit='cover'
        alt='carro'
        /> 

        <p> 0 </p>
      
        
        </div>
    </>
  )
}

export default CartWidget