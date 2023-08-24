import React from 'react'
import { Box } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    
    <div> 
      
      <Box bg='black' w='100%' p={4} color='white'>
      <h1> {greeting} </h1>
      </Box>
       </div>



   

   
  )
}

export default ItemListContainer