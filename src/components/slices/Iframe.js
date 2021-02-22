import React from 'react'
import Reverso3d from '../Reverso3d'
import Wrapper from '../Wrapper'
import { Box } from '@chakra-ui/core'

const Iframe = (props) => {
    console.log('Iframe', props)
    return (
        props.data.is_wide ?
            <Box
                bg='gray.50'
            >
                <Reverso3d
                    url={props.data.iframe_url ? props.data.iframe_url : null}
                />
            </Box>
            :
            <Box
                bg='gray.50'
            >
                <Reverso3d
                    url={props.data.iframe_url ? props.data.iframe_url : null}
                />
            </Box>
    )
}

export default Iframe