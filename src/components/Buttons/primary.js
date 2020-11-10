import React from 'react'
import {
    Button,
} from '@chakra-ui/core'

const BtnPrimary = ({
    props,
    handleClick,
    children,
    to,
    as,
}) => {
    return(
        <Button
            to={ to ? to : null}
            as={ as ? as : null}
            cursor='pointer'
            bg='brand.1'
            color='white'
            p='.7rem 1rem .5rem 1rem'
            border='solid 1px'
            borderColor='brand.1'
            _hover={{
                bg:'blue.500'
            }}
            _active={{
                bg:'blue.700'
            }}
            onClick={ handleClick } 
            { ...props}
            >{children}</Button>
    )
}

export default BtnPrimary