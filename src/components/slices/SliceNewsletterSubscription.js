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
import BtnPrimary from '../Buttons/primary'
import NewsletterForm from '../NewsletterForm'

const NewsletterSlice = () => {
    return (
        <Wrapper
                bg='brand.3'
                py='4rem'
            >
                <Box
                    maxW='520px'
                    mx='auto'>
                        <Heading
                        color='white'
                        fontSize='22px'
                        textAlign='center'
                        mb='1rem'
                        >
                            On-board videos, test drives, testimonials, opportunities, subscribe to the monthly Reverso newsletter to keep in touch.
                        </Heading>
                    <NewsletterForm />
                </Box>
            </Wrapper>
    )
}
export default NewsletterSlice 