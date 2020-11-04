import React from 'react'
import {
    Box
} from '@chakra-ui/core'
const Wrapper = (props) => {
    return (
        <Box
            {...props}
        >
            <Box
                mx={{ xs: 0, md: 'auto' }}
                maxW='1150px'
                p={{ xs:'1rem', xl:'0'}}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default Wrapper