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
            bg='white'
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
                            fontWeight='400'
                        >
                            Contact us
                        </Heading>
                        <Text
                            color='gray.900'
                            fontSize='14px'
                        >
                            contact@reversoproject.com
                            <br />+33 6 95 85 83 93
                        </Text>
                        <Text
                            color='gray.900'
                            fontSize='14px'
                        >
                            <br />10 parc club du millénaire
                            <br />1025 avenue Henri Becquerel
                            <br />34000 Montpellier
                            <br />FRANCE
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