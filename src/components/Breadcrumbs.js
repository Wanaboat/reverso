import React from 'react'
import { Box } from '@chakra-ui/core'
import buildSlug from '../utils/buildSlug'

const Breadcrumbs =  ({ node }) => {
    console.log( 'Breadcrumbs', node )
    const crumbs = buildSlug( node, 'fr')
    console.log( 'crumbs', crumbs)
    return(
        <Box
            bg='white'
            p='2rem'
            color='gray.900'
            borderBottom='solid 1px'
            borderColor='gray.200'
        >Breadcrumbs
        </Box>
    )
}

export default Breadcrumbs