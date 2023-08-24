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
import image from './Img/petraceramicas.png'

const NavBar = () => {
  return (
    <div >
        <Flex>
         <Box p='5'>
         <Image 
    boxSize='100px'
    objectFit='cover'
    src='../Img/petraceramicas.png'
    alt='Petra Ceramicas'
  />
         </Box>
         
         <Box p='4' >
      <Menu>
           <MenuButton>
               Menu
           </MenuButton>

         <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
             <MenuItem>Mark as Draft</MenuItem>
       </MenuList>
      </Menu>
          </Box>

         <Spacer />
         <Box p='4' >
            <CartWidget />


         </Box>



         

      </Flex>

        
    
        
    </div>
  )
}

export default NavBar