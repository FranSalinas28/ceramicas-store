import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import {collection, getDocs, getFirestore} from 'firebase/firestore' 


const ItemListContainer = ({}) => {
  const {categoria} = useParams()
  const [productos, setProductos] = useState([])
  console.log(productos)

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "ceramicas");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Corrección de las llaves aquí
      setProductos(docs);
    });
  }, []);

  const filteredProducts = productos.filter((producto)=> producto.categoria === categoria)
  return (
    <> 
     
      <Box bg='black' w='100%' p={4} color='white'>
    
      </Box>



    
       { 
        categoria ? <ItemList productos = {filteredProducts} /> : <ItemList productos={productos} />
        }
        


       </>
   
  )
}

export default ItemListContainer