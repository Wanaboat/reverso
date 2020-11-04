import React, { useEffect, useState } from 'react'

import {
    Box,
    Button,
    Icon,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/core'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Wrapper from '../components/Wrapper'

const Carousel = () => {

    const [openItem, setOpenItem] = useState(false)

    const Items = () => {
        return (

            [1, 2, 3, 4].map((item, index) =>
                <Slide index={index}>
                    <Box
                        p={{ xs: '1rem 4rem' }}
                        position='relative'
                    >
                        <Heading
                            as='p'
                            textTransform='uppercase'
                            fontSize='20px'
                            mb='1rem'
                            textAlign='center'
                        >
                            Title of the block
                </Heading>
                        <Text
                            fontSize='14px'
                            textAlign='center'
                        >
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Text>
                        <Text
                            textAlign='center'
                            mt='2rem'
                        >
                            — 🇨🇭 Martin - Zürich, Suisse
                    </Text>
                    </Box>
                </Slide>

            )
        )
    }
    return (
        <Wrapper
            bg='brand.3'
            color='white'
            py='2rem'
        >



            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={4}
            >
                <Box
                    position='relative'
                >
                    <Flex
                        alignItems='center'
                        position='absolute'
                        h='100%'
                        top='0'
                        left='0'
                        zIndex='tooltip'
                    >
                    <Box
                            as={ButtonBack}
                            bg='gray.800'
                            p='1rem'
                            borderRadius='3px'
                        >
                        <Icon name='arrow-back' size='20px' />
                    </Box>

                    </Flex>
                    <Flex
                        alignItems='center'
                        position='absolute'
                        h='100%'
                        top='0'
                        right='0'
                        zIndex='tooltip'
                    >
                        <Box
                            as={ButtonNext}
                            bg='gray.800'
                            p='1rem'
                            borderRadius='3px'
                        >
                    {/* <ButtonNext> */}
                        <Icon name='arrow-forward' size='20px' />
                    {/* </ButtonNext> */}
                    </Box>

                    </Flex>
                    <Slider>
                        <Items />
                    </Slider>

                    {/* <Items /> */}
                </Box>
            </CarouselProvider>

        </Wrapper>
    )
}

export default Carousel