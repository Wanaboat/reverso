import React from 'react'
import Wrapper from '../Wrapper'
import {
    Box,
    SimpleGrid,
    PseudoBox,
    Image,
} from '@chakra-ui/core'


const TwoImgButtons = ( props ) => {
    console.log('TwoImgButtons', props )
    const { data } = props
    return (
        <Wrapper>
            <SimpleGrid
                columns='2'
                gap='2rem'
                my='3rem'
            >
                <PseudoBox
                    role="group"
                    bg='transparent'
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
                            { data.label_1}
                        </PseudoBox>

                    </PseudoBox>
                    <Image
                        w='100%'
                        src={ data.image_1.localFile.childImageSharp.fixed.src
                    } alt={ data.image_1.alt } />
                </PseudoBox>
                <PseudoBox
                    role="group"
                    bg='transparent'
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
                            { data.label_2}
                        </PseudoBox>

                    </PseudoBox>
                    <Image
                        w='100%'
                        src={ data.image_2.localFile.childImageSharp.fixed.src
                    } alt={ data.image_2.alt } />
                </PseudoBox>
            </SimpleGrid>
        </Wrapper>
    )
}

export default TwoImgButtons