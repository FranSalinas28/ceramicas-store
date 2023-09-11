import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, Image, Stack, SimpleGrid, Flex} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
const { id } = useParams()

const filteredProducts = productos.filter((producto)=> producto.id == id)

  return (
    <div>
      {filteredProducts.map((p)=> {
        return (
        

          <div key= {p.id}>
            
            <Center p='1rem'>
            
              <Card>
              
                <CardHeader>
                  <Image src={p.imageUrl}></Image>
                  <Heading size='md'>{p.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  
                  <Text>{p.descripcion}</Text>
                  <Text>{p.categoria}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount></ItemCount>
                </CardFooter>
                
                
              </Card>

            </Center>
          
          </div>
        )
      })}
    </div>
    
  )
}

export default React.memo(ItemDetail)