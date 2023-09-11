import React from 'react'
import { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const restar = () => {
    setContador(contador - 1) 
    
    }
    
    const onAdd =() => {
        alert(contador)
    }


  return (
    <>

   
   <p> cantidad {contador} </p>
    <Button m='6' onClick={()=> setContador(contador+1)}> + </Button>
    <Button m='6'onClick= {restar}>-</Button>
    
    <Button  m='6'onClick={() => setContador(0)}>Vaciar</Button>

    <p>
    <Button ml='12' colorScheme='blackAlpha' onClick = {onAdd}>Total</Button>
    </p>
    
    </>

  )
}

export default ItemCount