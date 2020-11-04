import React from 'react'
import {
    Button,
} from '@chakra-ui/core'

const BtnSecondary = ({props, handleClick, children}) => {
    return(
        <Button
            bg='white'
            color='gray.600'
            border='solid 1px'
            borderColor='gray.600'
            p='.75rem 1rem .5rem 1rem'
            _hover={{
                bg:'gray.700',
                color:'white'
            }}
            onClick={ handleClick } 
            { ...props}
            >{children}</Button>
    )
}

export default BtnSecondary