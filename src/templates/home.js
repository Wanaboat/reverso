import React from 'react'
import Layout from '../components/layout'

import {
    Box,
    Flex,
    Heading
} from '@chakra-ui/core'

const HomeTpl = (props) => {
    return (
        <Layout lang={ props.pageContext.lang}>
            <Flex
                minH='100vh'
                w='100%'
                justifyContent='center'
                alignItems='center'
            >
                <Box>
                    <Heading
                        textTransform='uppercase'
                        color='gray.300'
                    >
                        Homepage
                    </Heading>
                    <Box
                    
                    >
                        Content
                    </Box>
                </Box>
            </Flex>
        </Layout>
    )
}

export default HomeTpl