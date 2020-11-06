import React from 'react'
import Wrapper from '../Wrapper'
import {
    Box,
    SimpleGrid,
    PseudoBox,
    Image,
} from '@chakra-ui/core'


const TwoImgButtons = () => {
    return (
        <Wrapper>
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
                    {/* <Image src={Img1} alt='alt' /> */}
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
                    {/* <Image src={Img2} alt='alt' /> */}
                </PseudoBox>
            </SimpleGrid>
        </Wrapper>
    )
}

export default TwoImgButtons