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
                maxW='70rem'
                px={{ xs:'1rem', xl:'0'}}
                py={{ xs:'1rem', xl:'0rem'}}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default Wrapper