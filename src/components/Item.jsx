import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Text, Button, Heading, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
  console.log(producto)


  return (

    <>
      
   
 <Card maxW='sm'>
  <CardBody>
   
    <Image
      boxSize='300px'
      src={producto.imagen}
      borderRadius='lg'
    />
    <Stack mt='6'>
      <Heading size='md'>{producto.nombre}</Heading>
      <Text color='grey' fontSize='xl'>
      ${producto.precio}
      </Text>
    </Stack>
   
  </CardBody>
  <Divider />
  <CardFooter>
    
      <Button variant='solid' colorScheme='purple'>
      <Link to={`/Item/${producto.id}`} >
        Detalle
      </Link>
      </Button>
   
  </CardFooter>
</Card>



</>


  )
}

export default Item