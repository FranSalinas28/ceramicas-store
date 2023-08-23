import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
        <Flex>
         <Box p='4'>
         <h3>Ceramicas Store</h3>
         </Box>
         <Spacer />
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