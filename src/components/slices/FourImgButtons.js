import React from 'react'
import Wrapper from '../Wrapper'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Button,
    Flex,
    Grid,
    // SimpleGrid,
    PseudoBox,
    Image,
    Stack,
    Text
} from '@chakra-ui/core'
import { linkResolver } from '../../prismic-configuration'

const FourImgButtons = ( props ) => {
    console.log('FourImgButtons', props )
    const { data, items } = props
    return (
        <Wrapper>
            <Box
                overflowX='scroll'
            >
                <Flex
                    templateColumns={{
                        xs:'90%',
                        lg:'1fr 1fr 1fr 1fr'
                    }}
                    gap='1rem'
                    w={{ xs:'calc( 90% * 4 + 3rem )', lg:'100%'}}
                >
                {
                items.map ? 
                items.map( (item, i) =>
                <PseudoBox
                    as={ GatsbyLink }
                    to={ linkResolver( item.button_target.document )}
                    role="group"
                    position='relative'
                    cursor='pointer'
                    transition='* 200ms ease'
                    w={{ xs:'25%', lg:'100%'}}
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
                            letterSpacing='0.085rem'
                        >
                            <Stack spacing="1rem">
                            <Text
                                textDecoration='underline'
                                fontSize={{ xs:'12px', lg:'16px' }}
                                fontWeight='500'
                            >{ item.label_primary }</Text>
                            <Text
                                letterSpacing='0.075rem'
                                whiteSpace='pre-wrap'
                                fontSize={{ xs:'14px', lg:'18px' }}
                            >{ item.label_secondary }</Text>
                            <Box>
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
                            </Box>
                            
                            </Stack>

                        </PseudoBox>

                    </PseudoBox>
                    { item.button_image ? 
                    <Box as='picture'>
                        { item.button_image.localFile ? 
                            <>
                                <source type='image/jpeg' src={item.button_image.localFile.childImageSharp.fixed.src} />
                                <source type='image/webp' src={item.button_image.localFile.childImageSharp.fixed.srcWebp} />
                            </>
                        : null}
                        <Image
                            w='100%'
                            src={ item.button_image.localFile ? item.button_image.localFile.childImageSharp.fixed.src : item.button_image.fixed.src }
                            alt={ item.button_image.alt ? item.button_image.alt : '' }
                        />
                    </Box>
                    : null}
                </PseudoBox>
                )
                : null
                }
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