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
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default Wrapper