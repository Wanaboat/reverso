import React from 'react'
import {
    Box,
    Flex,
    Grid,
    Text,
    Image,
    Heading,
    Stack,
    SimpleGrid
} from '@chakra-ui/core'

import Wrapper from '../Wrapper'
import BtnPrimary from '../Buttons/primary'
import NewsletterForm from '../NewsletterForm'

const NewsletterSlice = () => {
    return (
        <Wrapper
            bg='brand.3'
            py={{ lg:'4rem' }}
        >
            <SimpleGrid columns={{ xs:1, lg:2}}>
                <Flex alignItems='center'>
                    <Heading
                        color='white'
                        fontSize='22px'
                    >
                        On-board videos, test drives, testimonials, opportunities, subscribe to the monthly Reverso newsletter to keep in touch.
                        </Heading>
                </Flex>
                <Box
                // maxW='520px'
                // mx='auto'
                >
                    <NewsletterForm />
                </Box>
            </SimpleGrid>

        </Wrapper>
    )
}
export default NewsletterSlice 