import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useState }from 'react'
//Imporotar el context

const Form = () => {

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
      //buyer: {
      nombre, email
    } //,
    // items: cart.map(({id, nombre, precio}) => { id,nombre precio})

    const ordersCollection = collection(db, "orden")
  //}


  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)}/>
        <input type='text' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
        <button type='submit'>Enviar</button>
        
        </form>

        <h3>Id de tu compra:{orderId}</h3>
        </>
  )
}

export default Form