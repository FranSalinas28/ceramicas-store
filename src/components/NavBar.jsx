import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'
import logo from '../assets/petraceramicas.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div >
        <Flex>
         <Box p='5'>

          <Link to={"/"}> 
           <Image
           boxSize='100px'
           objectFit='cover'
           src={logo}
           alt='Petra Ceramicas'
           />
           </Link>
         </Box>
         
       <Box p='4' >
          <Menu>
            <MenuButton mt='10'>
               Categorías
            </MenuButton>

          
          <MenuList>
          
              <MenuItem>
              <Link to={`/categoria/${"Platos"}`}>
              Platos
              </Link>
              </MenuItem>
              


              <MenuItem>
              <Link to={`/categoria/${"Elementos"}`}>
              Elementos
              </Link>
              </MenuItem>


             <MenuItem>
             <Link to={`/categoria/${"Esculturas"}`}>
             Esculturas
             </Link>
             </MenuItem>
             
          </MenuList>
        
        </Menu>
      </Box>

         <Spacer />
         <Box p='10' >
          <Link to={"/Cart"} >
            <CartWidget />
            </Link>

         </Box>



         

      </Flex>

        
    
        
    </div>
  )
}

export default NavBar