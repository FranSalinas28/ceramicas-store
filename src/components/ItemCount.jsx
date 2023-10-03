import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({id, nombre, precio}) => {
    const [contador, setContador] = useState(0)

    const restar = () => {
    setContador(contador - 1) 
    
    }
    
    

    const { addItem } = useContext (CartContext)

    const handleOnAdd = () => {
        
      const item = {
          id, nombre, precio
      }
      console.log(contador)
      addItem(item, contador)
      alert(`cantidad agregada ${contador}`)

  }


  return (
    <>

   
   <p> cantidad {contador} </p>
    <Button m='6' onClick={()=> setContador(contador+1)}> + </Button>
    <Button m='6'onClick= {restar}>-</Button>
    
    <Button  m='6'onClick={() => setContador(0)}>Vaciar</Button>

    <Box>
     
    <Button ml='12' colorScheme='blackAlpha' onClick = {handleOnAdd}>Agregar al carrito</Button>
    </Box>
    
    </>

  )
}

export default ItemCount