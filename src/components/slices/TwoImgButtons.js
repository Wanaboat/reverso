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
                gap={{ xs:'1rem', lg:'2rem' }}
                // my={{ xs:'1rem', lg:'3rem' }}
                pb='1rem'
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
                            fontSize={{ xs: '18px', lg: '40px' }}
                            lineHeight={{ lg: '3rem' }}
                            textTransform='uppercase'
                            fontWeight='900'
                            fontFamily='Roboto'
                            p={{ xs:'1rem', lg:'2rem' }}
                            transition='all 200ms ease'
                            _groupHover={{ pl: "4rem" }}
                        >
                            { data.label_1}
                        </PseudoBox>

                    </PseudoBox>
                    <Box as='picture'>
                        <source type='image/webp' srcSet={ data.image_1.localFile.childImageSharp.fixed.srcWebp } />
                        <source type='image/jpeg' srcSet={ data.image_1.localFile.childImageSharp.fixed.src } />
                        <Image
                            w='100%'
                            src={ data.image_1.localFile.childImageSharp.fixed.src}
                            alt={ data.image_1.alt }
                        />
                    </Box>
                    
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
                            fontSize={{ xs: '18px', lg: '40px' }}
                            lineHeight={{ lg: '3rem' }}
                            fontWeight='900'
                            fontFamily='Roboto'
                            p={{ xs:'1rem', lg:'2rem' }}
                            transition='all 200ms ease'
                            _groupHover={{ pl: "4rem" }}
                        >
                            { data.label_2}
                        </PseudoBox>

                    </PseudoBox>
                    <Box as='picture'>
                        <source type='image/webp' srcSet={ data.image_2.localFile.childImageSharp.fixed.srcWebp } />
                        <source type='image/jpeg' srcSet={ data.image_2.localFile.childImageSharp.fixed.src } />
                        <Image
                            w='100%'
                            src={ data.image_2.localFile.childImageSharp.fixed.src}
                            alt={ data.image_2.alt }
                        />
                    </Box>
                </PseudoBox>
            </SimpleGrid>
        </Wrapper>
    )
}

export default TwoImgButtons