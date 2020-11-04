import React from 'react'
import {
    Box,
    Divider,
    Flex,
    Heading,
    Image,
    PseudoBox,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import Wrapper from './Wrapper'

import Img1 from '../images/reverso-shooting-1.jpg'
import Img2 from '../images/reverso-shooting-2.jpg'
import BtnPrimary from './Buttons/primary'
import SliceBannerAndDescription from '../components/slices/BannerAndDescription'
import Faq from '../components/Faq'
import Carousel from '../components/Carousel'
import ConfigBanner from '../components/slices/ConfigBanner'
const PageContent = () => {
    const SliderItems = () => {
        const items = [1, 2, 3, 4]
        return (
            <Box
                overflowX='scroll'
            >
                <Flex
                    w={{ xs:'calc( 50% * 4)', lg:'100%'}}
                    wrap='nowrap'
                >
                    {
                        items.map((item, i) =>
                            <PseudoBox
                                role="group"
                                bg='red.100'
                                position='relative'
                                cursor='pointer'
                                transition='* 200ms ease'
                                w={{ xs:'50%', lg:'25%'}}
                                mr={ i+1 < items.length ? '1rem' : '0'}

                            >
                                <PseudoBox
                                    display='flex'
                                    position='absolute'
                                    top='0'
                                    left='0'
                                    w='100%'
                                    h='100%'
                                    alignItems='center'
                                    transition='all 200ms ease'
                                    _groupHover={{ bg: 'rgba(0,0,0,0.1)' }}
                                >
                                    <PseudoBox
                                        w='100%'
                                        color='white'
                                        bg='rgba(0,0,0,0.3)'
                                        fontSize={{ xs: '20px', lg: '48px' }}
                                        lineHeight={{ lg: '3rem' }}
                                        textTransform='uppercase'
                                        fontWeight='bold'
                                        p='2rem'
                                        pl='2rem'
                                        transition='all 200ms ease'
                                        _groupHover={{ pl: "4rem" }}
                                    >
                                        Easy<br /> Sailing
                                    </PseudoBox>

                                </PseudoBox>
                                <Image src={Img1} alt='alt' />
                            </PseudoBox>
                        )
                    }
                </Flex>
            </Box>
        )
    }
    return (
        <>
            <Wrapper>
                <Heading
                    my='3rem'
                    as='h1'>H1 semantic & descriptive Title
                </Heading>
                <Box>
                    <SliderItems />
                </Box>
                <SimpleGrid
                    columns='2'
                    gap='2rem'
                    my='3rem'
                >
                    <PseudoBox
                        role="group"
                        bg='red.100'
                        position='relative'
                        cursor='pointer'
                        transition='* 200ms ease'

                    >
                        <PseudoBox
                            display='flex'
                            position='absolute'
                            top='0'
                            left='0'
                            w='100%'
                            h='100%'
                            alignItems='center'
                            transition='all 200ms ease'
                            _groupHover={{ bg: 'rgba(0,0,0,0.1)' }}
                        >
                            <PseudoBox
                                w='100%'
                                color='white'
                                bg='rgba(0,0,0,0.3)'
                                fontSize={{ xs: '20px', lg: '48px' }}
                                lineHeight={{ lg: '3rem' }}
                                textTransform='uppercase'
                                fontWeight='bold'
                                p='2rem'
                                pl='2rem'
                                transition='all 200ms ease'
                                _groupHover={{ pl: "4rem" }}
                            >
                                Easy<br /> Sailing
                        </PseudoBox>

                        </PseudoBox>
                        <Image src={Img1} alt='alt' />
                    </PseudoBox>
                    <PseudoBox
                        role="group"
                        bg='red.100'
                        position='relative'
                        cursor='pointer'
                        transition='* 200ms ease'

                    >
                        <PseudoBox
                            display='flex'
                            position='absolute'
                            top='0'
                            left='0'
                            w='100%'
                            h='100%'
                            alignItems='center'
                            transition='all 200ms ease'
                            _groupHover={{ bg: 'rgba(0,0,0,0.1)' }}
                        >
                            <PseudoBox
                                w='100%'
                                color='white'
                                bg='rgba(0,0,0,0.3)'
                                fontSize={{ xs: '20px', lg: '48px' }}
                                lineHeight={{ lg: '3rem' }}
                                textTransform='uppercase'
                                fontWeight='bold'
                                p='2rem'
                                pl='2rem'
                                transition='all 200ms ease'
                                _groupHover={{ pl: "4rem" }}
                            >
                                Easy<br /> Sailing
                        </PseudoBox>

                        </PseudoBox>
                        <Image src={Img2} alt='alt' />
                    </PseudoBox>
                </SimpleGrid>
            </Wrapper>
            <Wrapper
                bg='brand.3'
                py='3rem'
                pb='8rem'
            >
                <Heading
                    color='white'
                    fontWeight='700'
                    fontSize={{ xs: '28px', lg: '48px' }}
                >
                    Reverso is A FRENCH  SMALL SAILBOAT MANUFACTURER FOCUSING ON PERFORMANCE DESIGNS AND INNOVATION
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
                        140+
                        <br />
                        boats
                    </Flex>
                    <Divider orientation='vertical' />
                    <Flex
                        alignItems='center'
                        px={{ xs: '1rem', lg: '3rem' }}
                        textAlign='center'
                    >
                        21
                        <br />
                        countries
                    </Flex>
                    <Divider orientation='vertical' />
                    <Flex
                        alignItems='center'
                        px={{ xs: '1rem', lg: '3rem' }}
                    >
                        Logo
                    </Flex>
                </Flex>
            </Wrapper>
            <Wrapper
                bg='brand.4'
            >
                <SimpleGrid
                    columns={{ xs: 1, lg: 2 }}
                    gap='2rem'
                >
                    <Box
                        as='figure'
                        transform='translateY(-5rem)'
                    >
                        <Box as='picture'>
                            <Image
                                src='https://static.actu.fr/uploads/2019/05/DJI_0065-copie2-960x640.jpg'
                            />
                            <Text as="figcaption">Légende de l'image</Text>
                        </Box>
                    </Box>
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        wrap='wrap'
                    >
                        <Heading>
                            «The Boat of the Future is Here»
                        </Heading>
                        <Box w='100%'>
                            <Text
                                textAlign='center'
                            >
                                Sail-World.com
                            </Text>
                        </Box>
                        <Box>
                            <BtnPrimary>
                                Test
                            </BtnPrimary>
                        </Box>
                    </Flex>
                </SimpleGrid>
            </Wrapper>
            <SliceBannerAndDescription />
            <ConfigBanner />
            <Carousel />
            <Faq />

        </>
    )
}

export default PageContent