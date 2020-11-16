import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Heading,
    Flex,
    Image,
    PseudoBox,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import { linkResolver } from '../../prismic-configuration'

const IllustratedSummary = ( props ) => {
    console.log( 'IllustratedSummary', props )
    const { data, items } = props
    return(
        <Wrapper>
            <Box my={{ xs:'1rem', lg:'2rem' }}>
                <SimpleGrid
                    columns={{ xs:1, lg:2}}
                    gap={{ xs:'1rem', lg:'2rem'}}
                >
                    <Flex
                        // border='solid 1px'
                        // borderColor='gray.400'
                        // borderRadius='2px'
                        p='3rem'
                        h='100%'
                        wrap='wrap'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Box>
                            <Heading
                                as='h3'
                                textTransform='uppercase'
                                w='100%'
                                mb='1rem'
                                fontSize={{ xs:'20px', lg:'28px'}}
                            >{data.summary_title}</Heading>
                            <Text
                                w='100%'
                            >{ data.summary_intro }</Text>
                        </Box>

                    </Flex>
                    { items.map( item =>
                    <PseudoBox
                        borderRadius='2px'
                        role="group"
                        cursor='pointer'
                        to={ linkResolver( item.link_target.document ) }
                        as={ GatsbyLink }
                    >
                        <Box
                            position='relative'
                            w='100%'
                        >
                            <PseudoBox
                                display='flex'
                                position='absolute'
                                top='0'
                                right='0'
                                w='100%'
                                h='100%'
                                bg='rgba(0,0,0,0.4)'
                                justifyContent='center'
                                alignItems='center'
                                transition='all 200ms ease'

                                _groupHover={{ bg: 'rgba(0,0,0,0.1)' }}
                            >
                                <Text
                                    textShadow='0 0 3px rgba(0,0,0,0.4)'
                                    color='white'
                                    fontWeight='900'
                                    fontFamily='Roboto'
                                    fontSize={{ xs:'22px', lg:'30px' }}
                                    textAlign='center'
                                >
                                { item.link_label }

                                </Text>
                            </PseudoBox>
                            {
                                item.link_image.thumbnails ?
                                item.link_image.thumbnails.landscape ?
                            <Image
                                w='100%'
                                h='100%'
                                borderRadius='2px'
                                objectFit='cover'
                                src={ item.link_image.thumbnails.landscape.localFile.childImageSharp.fixed.src }
                                alt={ item.link_image.alt ? item.link_image.alt : '' }
                            />
                            : null : null }
                        </Box>
                    </PseudoBox>
                    )}

                </SimpleGrid>
            </Box>
        </Wrapper>
    )
}

export default IllustratedSummary


