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

const SliceBannerAndDescription = () => {
    return (
        <Wrapper
            mt='2px'
            bg='white'
            py='4rem'
        >
            <Grid
                gap='4rem'
                templateColumns={{ xs: '100%', lg: '50% 50%' }}
            >
                <Box order='2'>
                    <Box
                        as='picture'>
                        {/* <Image w='100%' src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w' /> */}
                    </Box>
                </Box>
                <Stack order='1' spacing='2rem' justify='center'>
                    <Heading
                        as='p'
                        fontWeight='600'
                        fontSize='24px'
                    >
                        Reverso Sailing dinghy : Meet our full range
                    </Heading>
                    <Text>
                        3 different, hulls colors, many tech equipements possibilities and several options : your Reverso will be like no other.
                    </Text>
                    <Box>
                        <BtnPrimary>
                            Test
                        </BtnPrimary>
                    </Box>

                </Stack>
            </Grid>
        </Wrapper>
    )
}
export default SliceBannerAndDescription 