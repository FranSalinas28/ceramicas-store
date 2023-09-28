import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, Image, Stack, SimpleGrid, Flex} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import ShoppingCartProvider from '../context/ShoppingCartContext'
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetail = ({ producto }) => {
console.log(producto)
  const {addItem} = useContext(CartContext)


const handleOnAdd = (quantity) => {
  setQuantityAdded(quantity)

  const Item = {
    id, nombre, precio
  }
  addItem(Item, quantity)
}



  return (

    <div>
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
                  <Text>{producto.precio}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount handleOnAdd = {handleOnAdd}></ItemCount>
                </CardFooter>
                
                
              </Card>
            

            </Center>
          
          </div>
        
        
    
    </div>
   
    
  )
}

export default React.memo(ItemDetail)