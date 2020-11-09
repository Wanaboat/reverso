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
import { FormattedMessage } from 'react-intl'

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
                        <FormattedMessage id='newsletter.subscribe.title' />&nbsp;:
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