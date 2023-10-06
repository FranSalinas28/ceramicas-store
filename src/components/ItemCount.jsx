import React from 'react'
import { useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'


const ItemCount = ({handleOnAdd}) => {
    const [contador, setContador] = useState(0)

    const restar = () => {
      if(contador > 0)
    setContador(contador - 1) 
    
    }
    
    const sumar = () => {
      if(contador < 10)
      setContador(contador + 1)
    }
    



  return (
    <>

   
   
    <Button m='4' onClick={sumar}> + </Button>
    <Text m='5'> {contador} </Text>
    <Button m='4'onClick= {restar}>-</Button>
    
    <Button  m='4'onClick={() => setContador(0)}>Vaciar</Button>

    <Box>
    <Button m='4' colorScheme='blackAlpha' onClick = {()=>handleOnAdd(contador)}>Agregar al carrito</Button>
    </Box>
    
    </>

  )
}

export default ItemCount