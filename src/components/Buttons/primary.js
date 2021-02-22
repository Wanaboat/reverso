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
    mx,
    className
}) => {
    return(
        <Button
            to={ to ? to : null}
            as={ as ? as : null}
            mx={ mx ? mx : null }
            className={ className ? className : null }
            cursor='pointer'
            bg='brand.1'
            color='white'
            p='.7rem 1rem .7rem 1rem'
            border='solid 1px'
            borderColor='brand.1'
            textTransform='uppercase'
            fontWeight='normal'
            fontFamily='Futura PT'
            letterSpacing='0.05rem'
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