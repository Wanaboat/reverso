import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Heading,
    PseudoBox,
    Stack
} from '@chakra-ui/core'
import { linkResolver } from '../../prismic-configuration'
import { FormattedMessage } from 'react-intl'

const SisterPagesSummary = ( props ) => {
    console.log('SisterPagesSummary', props )
    return(
        <Box
            maxW={{ xs:'none', lg: '42rem' }}
            mx='auto'
            py='2rem'
            id="related"
        >
            <Heading
                as='p'
                fontSize={{ xs:'14px', lg:'22px'}}
                mb='2rem'
            >
                <FormattedMessage id='other.interesting.posts' />&nbsp;:
            </Heading>
            <Stack spacing='0rem'>
                { props.sisters.edges.map( item =>
                <PseudoBox
                    borderBottom='solid 1px'
                    borderBottomColor='gray.100'
                    as={ GatsbyLink }
                    to={ linkResolver( item.node ) }
                    p='1rem'
                    bg='gray.50'
                    _hover={{
                        color:'brand.1',
                        textDecoration:'underline'
                    }}
                >
                    { item.node.data.title.text }
                </PseudoBox>    
                    )}
            </Stack>
        </Box>
    )
}

export default SisterPagesSummary