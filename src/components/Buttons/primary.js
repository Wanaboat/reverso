import React from 'react'
import {
    Button,
} from '@chakra-ui/core'

const BtnPrimary = ({props, handleClick, children}) => {
    return(
        <Button
            bg='brand.1'
            color='white'
            _hover={{
                bg:'blue.500'
            }}
            onClick={ handleClick } 
            { ...props}
            >{children}</Button>
    )
}

export default BtnPrimary