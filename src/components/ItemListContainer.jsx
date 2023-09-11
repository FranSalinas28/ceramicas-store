import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { Box, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Image } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  const { categoria } = useParams()
  console.log(categoria)


  const productos = [
    { id: 1, nombre: "Plato Tigris", descripcion: "Trabajo en cerámica monocromático, perfecto para decoración de espacios", stock: 5, categoria: "Platos", imageUrl:"https://i.pinimg.com/564x/9e/64/da/9e64da94dbaec127c625f5594d1b712c.jpg"},
    { id: 2, nombre: "Colección Diosa", descripcion: "Trabajo en cerámica multicolor. Una colección ilimitada para decorar tu espacio favorito", stock: 10, categoria: "Platos", imageUrl:"https://i.pinimg.com/564x/97/85/07/9785077ffb5681434e52e35c7b7a23b9.jpg"},
    { id: 3, nombre: "Altar vela", descripcion: "Trabajo en cerámica monocromático para la creación de tus espacios sagrados", stock: 20, categoria: "Elementos", imageUrl:"https://i.pinimg.com/564x/d3/79/dd/d379dd6f830c21d7fece51fb71b253ea.jpg"},
    { id: 4, nombre: "Altar calabera", descripcion: "Trabajo en cerámica con tonalidades pasteles", stock: 15, categoria: "Elementos", imageUrl:"https://i.pinimg.com/564x/94/6c/c3/946cc31debb0c970c243da3a1d136ae8.jpg"},
    { id: 5, nombre: "Zorro", descripcion: "Trabajo en cerámica maciza, con tonalidades fuertes", stock: 30, categoria: "Esculturas", imageUrl:"https://i.pinimg.com/564x/d8/d3/15/d8d31590c854ba37029be546cd06ffc4.jpg"},
    { id: 6, nombre: "Rabbit", descripcion: "Trabajo en cerámica maciza, con pinturas brillates", stock: 30, categoria: "Esculturas", imageUrl:"https://i.pinimg.com/564x/63/24/61/6324610f6ec5be104911b7b61ea75284.jpg"},

]

const getProductos = new Promise((resolve, reject)=> {
  if (productos.lenght > 0) {
      setTimeout(()=>{
          resolve(productos)
      }, 2000)
  } else {
      reject(new Error("No hay datos"))
  }
})

getProductos
.then((res)=>{

})
.catch((error) =>{
  console.log(error)
})


  const filteredProducts = productos.filter((producto)=> producto.categoria === categoria)
  return (
    <> 
     
      <Box bg='black' w='100%' p={4} color='white'>
      <h1> {greeting} </h1>
      </Box>

      

      { 
      categoria ? <ItemList productos = {filteredProducts} /> : <ItemList productos={productos} />
      }
     

       </>
   
  )
}

export default ItemListContainer