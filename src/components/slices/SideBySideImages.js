import React from 'react'

import {
    Box,
    Image,
    SimpleGrid
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const SideBySideImages = ( props ) => {
    return(
        <Wrapper>
            {/* SideBySideImages
            <pre>
                { JSON.stringify( props, null, 2) }
            </pre> */}
            <SimpleGrid
                columns={{ xs: 1, lg:2 }}
                gap={ 6 }
                my={ 10 }
            >
                <Box>
                    <Image
                        src={ props.data.image1.localFile.childImageSharp.fixed.src }
                        alt={ props.data.image1.alt }
                        w='100%'
                    />
                </Box>
                <Box>
                    <Image
                        src={ props.data.image2.localFile.childImageSharp.fixed.src }
                        alt={ props.data.image2.alt }
                        w='100%'
                    />
                </Box>

            </SimpleGrid>
        </Wrapper>
    )
}

export default SideBySideImages

