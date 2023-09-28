import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import {collection, getDocs, getFirestore} from 'firebase/firestore' 


const ItemListContainer = ({}) => {
  const {categoria} = useParams()
  const [productos, setProductos] =useState([])
  console.log(productos)

  useEffect(()=>{

      const db = getFirestore()
      const itemsCollection = collection(db, `${categoria}`)
      getDocs(itemsCollection).then((snapshot) =>{

          const docs = snapshot.docs.map((doc)=> doc.data())
          setProductos(docs)

      })

  },[])


  const filteredProducts = productos.filter((producto)=> producto.categoria === categoria)
  return (
    <> 
     
      <Box bg='black' w='100%' p={4} color='white'>
    
      </Box>



    {
            filteredProducts.map((p)=> (
                <div key={p.nombre}>
                    <h4>producto: {p.nombre}</h4>
                    <h5>ctegoría: {p.categoria}</h5>
                    <h6>${p.precio}</h6>


                </div>
            ) )
        }



       </>
   
  )
}

export default ItemListContainer