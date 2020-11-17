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

const ContactForm = () => {
    return (
        <Wrapper
            bg='brand.4'
            id='contact'
        >
            <SimpleGrid
                columns={{ xs: 1, lg: 2 }}
            >
                <Flex
                    alignItems='center'
                >
                    <Box>
                        <Heading
                            as='h4'
                            mb='1rem'
                            fontSize='26px'
                        >Contact</Heading>
                        <Text
                            color='gray.900'
                            fontSize='14px'
                        >
                            • 10 parc club du millénaire
                            <br />• 1025 av Henri Becquerel
                            <br />• 34000 Montpellier FRANCE
                            <br />• tel : +33 6 95 85 83 93
                            <br />• contact@reversoproject.com
                        </Text>
                    </Box>
                </Flex>
                <Box>
                    <AspectRatioBox ratio={4 / 3}>
                        <Box
                            as="iframe"
                            src='https://form.typeform.com/to/EimY5yHO' />
                    </AspectRatioBox>
                </Box>
            </SimpleGrid>
        </Wrapper>
    )
}

export default ContactForm