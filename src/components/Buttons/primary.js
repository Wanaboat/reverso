import React from 'react'
import {
    Button,
} from '@chakra-ui/core'

const BtnPrimary = ({props, children}) => {
    return(
        <Button
            bg='red.400'
            _hover={{
                bg:'red.500'
            }}
            { ...props}
            >{children}</Button>
    )
}

export default BtnPrimary