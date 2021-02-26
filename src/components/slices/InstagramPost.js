import React from 'react'
import Helmet from 'react-helmet'
import {
    Box,
    Flex
} from '@chakra-ui/core'


const InstagramPost = ( props ) => {
    return(
        <Flex justifyContent='center' py={{ xs:2, lg:4 }}>
            <Helmet>
                <script async src="https://www.instagram.com/embed.js" />
            </Helmet>
            <Box w='100%' maxW='42rem'>
                <div dangerouslySetInnerHTML={{ __html: props.data.instagram_post.html }}></div>
            </Box>
        </Flex>
    )
}

export default InstagramPost