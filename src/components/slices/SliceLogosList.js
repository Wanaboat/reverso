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

const SliceLogosList = () => {
    return (
        <Wrapper
            mt='2px'
            bg='white'
            py='4rem'
        >
            <Text
                textAlign='center'
            >
                Featured in :
            </Text>
            
            <Grid templateColumns='1fr 1fr' gap='2rem'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                >
                    <Image w='120px' src='https://cdn.asp.events/CLIENT_Dubai_Wo_4B15F265_5056_B739_54F3125D47F0BC95/sites/DIBS2019/media/libraries/media-partners/BIMediaLogoBlack.jpg.png' />
                </Flex>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                >
                    <Image w='120px' src='https://lh3.googleusercontent.com/proxy/bcpO2FrUtsbADNY18pcCzRIcdHI2s4E3ue7BsyWBX-KFHmLO0CG0aKjDFGa6JdHRdDm7pMuxLpMdWjfHZuifymhVGoUUlTnsufD-3AsvwMpg96X9lqmXlTgJ' />
                </Flex>
            </Grid>

        </Wrapper>
    )
}

export default SliceLogosList