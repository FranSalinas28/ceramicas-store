import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'
 

const ItemList = ({ productos }) => {

    return (
        

            <SimpleGrid columns={3} spacing={10} >
            {
                productos.map((p)=> {
                    return(
                        <>
                        <Item producto={p} key={p.id} />
                        
                        </>
                    )
                })
            }
            </SimpleGrid>
       
    )

}

export default ItemList