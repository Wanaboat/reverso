import React, { useState } from 'react'
import {
    Button,
} from '@chakra-ui/core'
import Configurator from '../ConfiguratorModal'

const BtnConfig = ({props, handleClick, children}) => {
    const [ showConfig, setShowConfig ] = useState( false )
    return(
        <>
            { showConfig ? <Configurator handleClose={ ()=>{ setShowConfig(false)}} /> : null }
            <Button
                bg='brand.1'
                color='white'
                p='.7rem 1rem .5rem 1rem'
                border='solid 1px'
                borderColor='brand.1'
                _hover={{
                    bg:'blue.500'
                }}
                onClick={ ()=>{ setShowConfig( true ) } } 
                { ...props}
                >{children}
            </Button>
        </>
    )
}

export default BtnConfig