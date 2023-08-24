import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Image } from '@chakra-ui/react'


const App = () => {
  return (
   <>
  <NavBar />
  
  <ItemListContainer greeting  = {" TOMA LO QUE NECESITES "} />
 
   </>
  )
}

export default App