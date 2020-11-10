import React, { useState } from 'react'
import {
    Button,
} from '@chakra-ui/core'
import Order from '../OrderModal'
import BtnSecondary from '../Buttons/secondary'

const BtnConfig = ({props, handleClick, children}) => {
    const [ showOrder, setShowOrder ] = useState( false )
    return(
        <>
            { showOrder ? <Order handleClose={ ()=>{ setShowOrder(false)}} /> : null }
            <BtnSecondary
                bg='brand.1'
                color='white'
                p='.7rem 1rem .5rem 1rem'
                border='solid 1px'
                borderColor='brand.1'
                _hover={{
                    bg:'blue.500'
                }}
                handleClick={ ()=>{ setShowOrder( true ) } } 
                { ...props}
                >{children}
            </BtnSecondary>
        </>
    )
}

export default BtnConfig