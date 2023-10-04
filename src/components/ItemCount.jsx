import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'


const ItemCount = ({handleOnAdd}) => {
    const [contador, setContador] = useState(0)

    const restar = () => {
    setContador(contador - 1) 
    
    }
    
    



  return (
    <>

   
   <p> cantidad {contador} </p>
    <Button m='6' onClick={()=> setContador(contador+1)}> + </Button>
    <Button m='6'onClick= {restar}>-</Button>
    
    <Button  m='6'onClick={() => setContador(0)}>Vaciar</Button>

    <Box>
     
    <Button ml='12' colorScheme='blackAlpha' onClick = {()=>handleOnAdd(contador)}>Agregar al carrito</Button>
    </Box>
    
    </>

  )
}

export default ItemCount