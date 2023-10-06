import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore' 
import Loading from './Loading'


const ItemListContainer = ({}) => {
  const {categoria} = useParams()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(productos)

  

  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const itemsCollection = collection(db, "ceramicas");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setProductos(docs);
    })
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  }, []);

  const filteredProducts = productos.filter((producto)=> producto.categoria === categoria)

  
 

  return (
    <> 
     
      <Box bg='black' w='100%' p={4} color='white'>
    
      </Box>



    
      { 
         loading ? <Loading/> : categoria ? <ItemList productos = {filteredProducts} /> : <ItemList productos={productos} />
        }
        
        


       </>
   
  )
}

export default ItemListContainer