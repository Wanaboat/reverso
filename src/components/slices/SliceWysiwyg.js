import React from 'react'
import { Box } from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import Wysiwyg from '../Wysiwyg'
const WysiwigSlice = ({ data }) => {
    console.log( 'WysiwigSlice', data )
    return (
        <Wrapper
            // mt='2px'
            bg={ data.is_dark ? 'brand.3' : 'none'}
            py={{ xs:'1rem', lg:'2rem' }}
        >
            <Box
                maxW={{ xs:'none', lg: !data.is_narrow ? '100%' : '42rem' }}
                mx='auto'
            >
                <Wysiwyg isDark={ data.is_dark  } data={ data.content.raw } />
            </Box>
        </Wrapper>
    )
}

export default WysiwigSlice