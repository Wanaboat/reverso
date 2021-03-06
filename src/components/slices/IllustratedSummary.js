import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Heading,
    Flex,
    Image,
    PseudoBox,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import { linkResolver } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'

const IllustratedSummary = ( props ) => {
    const { data, items } = props
    return(
        <Wrapper>
            {/* <pre>
                { JSON.stringify( data, null, 2)}
            </pre> */}
            <Box my={{ xs:'1rem', lg:'2rem' }}>
                <SimpleGrid
                    columns={{ xs:1, lg:2}}
                    gap={{ xs:'1rem', lg:'2rem'}}
                >
                    { !data.hide_text ?
                    <Flex
                        // border='solid 1px'
                        // borderColor='gray.400'
                        // borderRadius='2px'
                        py='3rem'
                        pr='3rem'
                        h='100%'
                        w='100%'
                        wrap='wrap'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Box w='100%'>
                            <Heading
                                as='h3'
                                textTransform='uppercase'
                                whiteSpace='pre-wrap'
                                w='100%'
                                mb='1rem'
                                fontSize={{ xs:'20px', lg:'28px'}}
                            >{data.summary_title}</Heading>
                            {/* <Text
                                w='100%'
                            >{ data.summary_intro }</Text> */}

                            <Text
                                className="wysiwyg"
                                fontSize='16px'
                                as='div'
                            >
                                {/* Rich : { data.summary_intro_rich.raw } */}
                                { RichText.render( data.summary_intro_rich.raw , linkResolver )}
                            </Text>
                        </Box>

                    </Flex>
                    : null}
                    { items.map( (item, index) =>
                    <PseudoBox
                        key={`IllustratedSummary-${index}`}
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
                                _groupHover={{ bg: 'rgba(0,0,0,0.5)' }}
                            >
                                <Text
                                    color='white'
                                    fontWeight='300'
                                    textTransform='uppercase'
                                    fontSize={{ xs:'18px', lg:'22px' }}
                                    letterSpacing='0.15rem'
                                    textAlign='center'
                                >
                                { item.link_label }
                                </Text>
                            </PseudoBox>
                            {
                                item.link_image.thumbnails ?
                                item.link_image.thumbnails.landscape ?
                                item.link_image.thumbnails.landscape.localFile ?
                            <Image
                                w='100%'
                                h='100%'
                                borderRadius='2px'
                                objectFit='cover'
                                src={ item.link_image.thumbnails.landscape.localFile.childImageSharp.fixed.src }
                                alt={ item.link_image.alt ? item.link_image.alt : '' }
                            />
                            : null : null : null }
                        </Box>
                    </PseudoBox>
                    )}

                </SimpleGrid>
            </Box>
        </Wrapper>
    )
}

export default IllustratedSummary


