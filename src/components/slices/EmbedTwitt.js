import React from 'react'
import Helmet from 'react-helmet'
import {
    Box,
    Flex
} from '@chakra-ui/core'

const EmbedTwitt = ( props ) => {
    // return null
    return(
        <Box>
            {/* <pre>
                { JSON.stringify( props, null, 2 )}
            </pre> */}
            <Flex justifyContent='center' py={{ xs:2, lg:4 }}>
                <Helmet>
                    <script async src="https://platform.twitter.com/widgets.js" />
                </Helmet>
                <Flex w='100%' maxW='42rem' justifyContent='center'>
                    <div dangerouslySetInnerHTML={{ __html: props.data.twit.html }}></div>
                </Flex>
            </Flex>
        </Box>
    )
}

export default EmbedTwitt