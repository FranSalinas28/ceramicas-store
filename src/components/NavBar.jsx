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

const NavBar = () => {
  return (
    <div >
        <Flex>
         <Box p='5'>
         
         <Image
           boxSize='100px'
           objectFit='cover'
           src={logo}
           alt='Petra Ceramicas'
         />
         </Box>
         
       <Box p='4' >
          <Menu>
            <MenuButton mt='10'>
               Explora
            </MenuButton>

          <MenuList>
              <MenuItem>Tienda</MenuItem>
              <MenuItem>Contacto</MenuItem>
             <MenuItem>Petra</MenuItem>
          </MenuList>
        </Menu>
      </Box>

         <Spacer />
         <Box p='10' >
            <CartWidget />


         </Box>



         

      </Flex>

        
    
        
    </div>
  )
}

export default NavBar