import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, Image, Stack, SimpleGrid, Flex} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import CartContext from '../context/ShoppingCartContext'
import { useContext } from 'react'


const ItemDetail = ({ producto }) => {

  const {addItem} = useContext(CartContext)
const handleOnAdd = (quantity) => {
  setQuantityAdded(quantity)
 
  addItem(producto, quantity)
}





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
                  <ItemCount handleOnAdd={handleOnAdd}/>
                </CardFooter>
                
                
              </Card>
            </Center>
          
      
        
        
    
    </div>
   
    
  )
}

export default React.memo(ItemDetail)