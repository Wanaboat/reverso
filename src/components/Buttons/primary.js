import React from 'react'
import {
    Button,
} from '@chakra-ui/core'

const BtnPrimary = ({props, handleClick, children}) => {
    return(
        <Button
            bg='red.400'
            _hover={{
                bg:'red.500'
            }}
            onClick={ handleClick } 
            { ...props}
            >{children}</Button>
    )
}

export default BtnPrimary