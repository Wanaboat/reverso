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
            textTransform='uppercase'
            fontWeight='normal'
            fontFamily='Futura PT'
            _hover={{
                bg:'blue.700'
            }}
            _active={{
                bg:'blue.500'
            }}
            onClick={ handleClick } 
            { ...props}
            >{children}</Button>
    )
}

export default BtnPrimary