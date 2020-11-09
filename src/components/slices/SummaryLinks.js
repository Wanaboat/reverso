import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Flex,
    Heading,
    PseudoBox,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'
import { linkResolver } from '../../prismic-configuration'

const SummaryLinks = ({ data }) => {
    console.log('SummaryLinks', data)
    return (
        <Wrapper
            py='3rem'
        >
            <Heading
                as='p'
                fontSize='24px'
                mb='1rem'
            >À lire sur ce sujet</Heading>

            {/* <SimpleGrid
                columns={{ xs: 1, lg: 3 }}
                gap='2rem'
            >
                {
                    data.map(item =>
                        <PseudoBox
                            as={GatsbyLink}
                            to={linkResolver(item.link.document)}
                            key={item.link.document.prismicId}
                            display='grid'
                            gridTemplateColumns='75px 1fr'
                            gridGap='1rem'
                            borderRadius='3px'
                            cursor='pointer'
                            bg='white'
                            p='.75rem 1.25rem'
                            borderBottom='solid 1px'
                            borderBottomColor='gray.200'
                        >
                            <Box bg='gray.50' w='75px' h='75px' />
                            <Flex
                                as='p'
                                fontSize='18px'
                                alignItems='center'
                            >
                                {
                                    item.link.document.data.title ?
                                        item.link.document.data.title.text
                                        : null
                                }
                            </Flex>
                        </PseudoBox>
                    )
                }
            </SimpleGrid> */}

        </Wrapper>

    )
}

export default SummaryLinks