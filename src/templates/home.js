import React from 'react'
import Layout from '../components/layout'

import {
    Box
} from '@chakra-ui/core'

const HomeTpl = (props) => {
    return(
        <Layout lang={props.pageContext.lang}>

        <Box>
            Homepage
        </Box>
        </Layout>
    )
}

export default HomeTpl