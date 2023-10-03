import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, Image, Stack, SimpleGrid, Flex} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import ShoppingCartProvider from '../context/ShoppingCartContext'
import {useEffect, useState} from 'react'


const ItemDetail = ({ producto }) => {



/*
  const {addItem} = useContext(CartContext)
const handleOnAdd = (quantity) => {
  setQuantityAdded(quantity)
  const Item = {
    id, nombre, precio
  }
  addItem(Item, quantity)
}

//function handleAddItem(quantity)   addItem(filteredProduct[0], quantity)

*/

  return (

    <div>
            <Center p='1rem'>
              <Card>
                <CardHeader>
                  <Image src={producto.imagen}></Image>
                  <Heading size='md'>{producto.nombre}</Heading>
                </CardHeader>
                <CardBody>
                <Text>{producto.categoria}</Text>
                  <Text>{producto.descripcion}</Text>
                  <Text>${producto.precio}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount ></ItemCount>
                </CardFooter>
                
                
              </Card>
            </Center>
          
      
        
        
    
    </div>
   
    
  )
}

export default React.memo(ItemDetail)