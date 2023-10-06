import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useState }from 'react'
import { Link } from 'react-router-dom'
import { CardBody, Card, CardFooter, CardHeader, Text, Stack, Button, Input } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'



const Form = () => {
  const { clearCart } = useContext(CartContext)

    const[nombre, setNombre] = useState("")
    const[email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) =>{
        e.preventDefault()
        nombre === "" ? alert("campo vacío") : alert(`Bienvenido, ${nombre}`)
        email ==="" ? alert("email vacío") : alert(`Registrado con el email, ${email}`)
        console.log("Información enviada")

        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))

    }

    const order = {
      
      nombre, email
    } 

    const ordersCollection = collection(db, "orden")
  


  return (
    <>
    <Card ml='40' mt='10' maxW='md'>
    <form onSubmit={handleSubmit}>
      <CardHeader> 
        <Text fontSize='xl'color='purple'>Completa tus datos</Text>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
        <Input type='text' placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)}/>
        <Input type='text' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
      
        <Button type='submit'>Generar ID</Button>

       
        </Stack>
        </CardBody>
        </form>

         <CardFooter>
        <h3>Id de tu compra:{orderId}</h3>
      
        </CardFooter>
        <Link to='/'>
        <Button m='4' type='submit' onClick={() => clearCart()}>Enviar</Button>
        </Link>
        </Card>
        </>
  )
}

export default Form