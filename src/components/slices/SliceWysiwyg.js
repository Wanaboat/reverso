import React from 'react'
import { Box } from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import Wysiwyg from '../Wysiwyg'
const WysiwigSlice = ({ data }) => {
    console.log( 'WysiwigSlice', data )
    return (
        <Wrapper
            // mt='2px'
            bg={
                data.background_color === 'white' ? 'white' :
                    data.background_color === 'gray' ? 'gray.50' :
                        data.background_color === 'mastic' ? 'brand.4' :
                            data.background_color === 'dark' ? 'brand.3' :
                                'transparent'
                }
            py={{ xs:'1rem', lg:'2rem' }}
        >
            <Box
                maxW={{ xs:'none', lg: !data.is_narrow ? '100%' : '42rem' }}
                mx='auto'
            >
                <Wysiwyg isDark={ data.background_color === 'dark' ? true : false  } data={ data.content.raw } />
            </Box>
        </Wrapper>
    )
}

export default WysiwigSlice