import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, Image, Stack, SimpleGrid, Flex} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {CartContext} from '../context/ShoppingCartContext'
import { useContext } from 'react'


const ItemDetail = ({ producto }) => {

  const {addItem} = useContext(CartContext)
const handleOnAdd = (quantity) => {
  addItem(producto, quantity)
}





  return (

    <div>
            <Center p='1rem'>
              <Card>
                <CardHeader>
                  <Image boxSize='450px' src={producto.imagen}></Image>
                  <Heading size='md' mt='4'>{producto.nombre}</Heading>
                </CardHeader>
                <CardBody>
                <Text fontSize='lg' color='grey'>{producto.categoria}</Text>
                  <Text>{producto.descripcion}</Text>
                  <Text mt='2'>Valor: ${producto.precio}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount handleOnAdd={handleOnAdd}/>
                </CardFooter>
                
                
              </Card>
            </Center>
          
      
        
        
    
    </div>
   
    
  )
}

export default React.memo(ItemDetail)