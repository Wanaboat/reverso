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

const SliceCenteredOneColumn = () => {
    return (
        <Wrapper
            mt='2px'
            bg='brand.3'
            py='4rem'
        >
            <Stack
                maxW='600px'
                mx='auto'
                spacing='2rem'
            >
                <Text
                    fontWeight='bold'
                    fontSize='24px'
                    color='white'
                >
                    <Text
                        as='span'
                        color='brand.2'
                    >
                        →
                </Text>
                    Try a Reverso near you, or contact an owner
                </Text>
                <Text
                    color='white'
                    fontSize='16px'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Box>
                    <BtnPrimary>
                    → Find an owner near your
                    </BtnPrimary>
                </Box>
            </Stack>



        </Wrapper>
    )
}

export default SliceCenteredOneColumn