import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Button, ButtonGroup, Heading, Divider, SimpleGrid, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
  console.log(producto)


  return (

    <>
      
   
 <Card maxW='sm'>
  <CardBody>
   
    <Image
      src={producto.imagen}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.nombre}</Heading>
      <Text>
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      </Text>
    </Stack>
   
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>

    
      <Button variant='solid' colorScheme='blue'>
      <Link to={`/Item/${producto.id}`} >
        Detalle
      </Link>
      </Button>
      

      <Button variant='ghost' colorScheme='blue'>
        Añadir carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>



</>


  )
}

export default Item