import React from 'react'
import {
    Box,
    Flex,
    Grid,
    Text,
    Image,
    Heading,
    Stack
} from '@chakra-ui/core'

import Wrapper from '../Wrapper'
import Wysiwyg from '../Wysiwyg'
const WysiwigSlice = ({ data }) => {
    console.log( data )
    return (
        <Wrapper
            mt='2px'
            bg='white'
            py='4rem'
        >
           <Wysiwyg data={ data.content.raw } />

        </Wrapper>
    )
}

export default WysiwigSlice