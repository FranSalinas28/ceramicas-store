import { useContext } from 'react'
import { Image, Heading, Stack, Text, CardBody } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

const CartItem = ({nombre, imagen, id, quantity, precio}) => {
const {removeItem} = useContext(CartContext)


  return (
    <div>
      
    <CardBody>
   
   <Image
     src={imagen}
     boxSize='300px'
     borderRadius='lg'/>
   <Stack mt='6' spacing='3'>
     <Heading size='md'>{nombre}</Heading>
     <Text>
        <p>Cantidad: {quantity} </p>
        <p>Valor: {precio}</p>
     </Text>
     <button onClick={() => removeItem(id)}>Eliminar</button>
     <Text color='blue.600' fontSize='2xl'></Text>
   </Stack>
  
 </CardBody>
    </div>
  )
}

export default CartItem