import React from 'react'
import { Box } from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import Wysiwyg from '../Wysiwyg'
const WysiwigSlice = ({ data }) => {
    console.log( 'WysiwigSlice', data )
    return (
        <Wrapper
            // mt='2px'
            bg='white'
            py={{ xs:'1rem', lg:'2rem' }}
        >
            <Box
                px={{ xs:0, lg: !data.is_narrow ? '0' : '12rem' }}
            >
                <Wysiwyg data={ data.content.raw } />
            </Box>
        </Wrapper>
    )
}

export default WysiwigSlice