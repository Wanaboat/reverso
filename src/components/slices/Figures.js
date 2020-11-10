import React from 'react'

import {
    Box,
    Divider,
    Flex,
    Heading,
    Image
    
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import logoBoatOfTheYearWhite from '../../images/logo-boat-of-year-white.svg'

const Figures = ( props ) => {
    console.log( 'Figures', props )
    return(
        <Wrapper
        bg='brand.3'
        py='3rem'
        pb='8rem'
    >
        <Heading
            color='white'
            fontWeight='700'
            fontSize={{ xs: '28px', lg: '48px' }}
            textTransform='uppercase'
        >
            {props.data.title1.text}
        </Heading>
        <Flex
            my='3rem'
            color='white'
            fontSize={{ xs: '20px', lg: '28px' }}
            fontWeight='500'
        >
            <Flex
                alignItems='center'
                pr={{ xs: '1rem', lg: '3rem' }}
                textAlign='center'
            >
                { props.data.figure_1 }
            </Flex>
            <Divider orientation='vertical' />
            <Flex
                alignItems='center'
                px={{ xs: '1rem', lg: '3rem' }}
                textAlign='center'
            >
                { props.data.figure_2 }
            </Flex>
            <Divider orientation='vertical' />
            <Flex
                alignItems='center'
                px={{ xs: '1rem', lg: '3rem' }}
            >
                <Image h='55px' src={logoBoatOfTheYearWhite} />
            </Flex>
        </Flex>
    </Wrapper>
    )
}

export default Figures