import React from 'react'
import Wrapper from '../Wrapper'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Button,
    Flex,
    // SimpleGrid,
    PseudoBox,
    Image,
    Stack,
    Text
} from '@chakra-ui/core'
import { linkResolver } from '../../prismic-configuration'

const FourImgButtons = ( props ) => {
    console.log('FourImgButtons', props )
    const { data } = props
    return (
        <Wrapper>
            <Box
                overflowX='scroll'
            >
                <Flex
                    w={{ xs:'calc( 50% * 4)', lg:'100%'}}
                    wrap='nowrap'
                >
                { data.map( (item, i) =>
                <PseudoBox
                    as={ GatsbyLink }
                    to={ linkResolver( item.button_target.document )}
                    role="group"
                    position='relative'
                    cursor='pointer'
                    transition='* 200ms ease'
                    w={{ xs:'50%', lg:'25%'}}
                    mr={ i+1 < data.length ? '1rem' : '0'}

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
                            h='100%'
                            color='white'
                            background='linear-gradient(180deg, rgba(0, 0, 0, 0.47) 69.8%, #BBBDBF 99.24%);'
                            fontSize={{ xs: '20px', lg: '28px' }}
                            lineHeight={{ lg: '3rem' }}
                            textTransform='uppercase'
                            fontWeight='bold'
                            p='2rem'
                            fontWeight='900'
                            fontFamily='Roboto'
                            lineHeight='28px'
                            transition='all 200ms ease'
                            // _groupHover={{ pl: "4rem" }}
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            flexWrap='wrap'
                            textAlign='center'
                            fontWeight='300'
                            fontFamily='Roboto'
                            letterSpacing='0.05rem'
                        >
                            <Stack spacing="1rem">
                            <Text
                                textDecoration='underline'
                                fontSize='14px'
                                fontWeight='500'
                            >{ item.label_primary }</Text>
                            <Text
                            letterSpacing='0.075rem'
                            fontSize='16px'
                            >{ item.label_secondary }</Text>

                            <Button variant='outline'
                                fontSize='12px'
                                _groupHover={{
                                    p1: ".5rem",
                                    bg:'white',
                                    color:'gray.900'

                                }}
                            >
                                { item.button_label }
                            </Button>
                            </Stack>

                        </PseudoBox>

                    </PseudoBox>
                    { item.button_image ? 
                    <Box as='picture'>
                        <source type='image/jpeg' src={item.button_image.localFile.childImageSharp.fixed.src} />
                        <source type='image/webp' src={item.button_image.localFile.childImageSharp.fixed.srcWebp} />
                        <Image src={ item.button_image.localFile.childImageSharp.fixed.src } alt={ item.button_image.alt } />
                    </Box>
                    : null}
                </PseudoBox>
                    )}
                </Flex>
            </Box>
            {/* <SimpleGrid
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
                            fontSize={{ xs: '18px', lg: '48px' }}
                            lineHeight={{ lg: '3rem' }}
                            textTransform='uppercase'
                            fontWeight='bold'
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
                            fontSize={{ xs: '18px', lg: '48px' }}
                            lineHeight={{ lg: '3rem' }}
                            textTransform='uppercase'
                            fontWeight='bold'
                            p={{ xs:'1rem', lg:'2rem' }}
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
            </SimpleGrid> */}
        </Wrapper>
    )
}

export default FourImgButtons