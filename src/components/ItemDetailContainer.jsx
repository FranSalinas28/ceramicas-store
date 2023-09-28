import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const productos = [
    { id: 1, nombre: "Plato Tigris", descripcion: "Trabajo en cerámica monocromático, perfecto para decoración de espacios", stock: 5, categoria: "Platos" },
    { id: 2, nombre: "Colección Diosa", descripcion: "Trabajo en cerámica multicolor. Una colección ilimitada para decorar tu espacio favorito", stock: 10, categoria: "Platos"},
    { id: 3, nombre: "Altar Vela", descripcion: "Trabajo en cerámica monocromático para la creación de tus espacios sagrados", stock: 20, categoria: "Elementos"},
    { id: 4, nombre: "Altar Calabera", descripcion: "Trabajo en cerámica con tonalidades pasteles", stock: 15, categoria: "Elementos"},
    { id: 5, nombre: "Zorro", descripcion: "Trabajo en cerámica maciza, con tonalidades fuertes", stock: 30, categoria: "Esculturas"},
    { id: 6, nombre: "Rabbit", descripcion: "Trabajo en cerámica maciza, con pinturas brillates", stock: 30, categoria: "Esculturas"},

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
  
  return (
   <>
   
   <ItemDetail productos = {productos} />
   </>



  )
}

export default ItemDetailContainer