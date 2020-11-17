import React from 'react'
import {
    AspectRatioBox,
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import Wysiwyg from '../Wysiwyg'

const Quote = ( props ) => {
    console.log( 'QuoteProps', props )
    return (
        <Wrapper
            bg='brand.3'
            id='quote'
        >
            <Flex
                alignItems='center'
            >
                <Box
                    textAlign='center'
                    color='white'
                    py='2rem'
                    fontStyle='italic'
                >
                    
                    <Wysiwyg data={ props.data.quote_content.raw } />
                    
                    <Text
                        mt='1rem'
                        fontStyle='normal'
                        fontWeight='600'
                    >{props.data.quote_signature}</Text>
                </Box>
            </Flex>
        </Wrapper>
    )
}

export default Quote