import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const ImageAlone = (props) => {

    console.log('ImageAlone', props)
    return (
        <Wrapper>
            <Box
                w={{ xs:'100vw', lg:props.wide_display ? '80vw' : '50rem' }}
                mx={{ xs:'-1rem', lg:'auto' }}
                // p='1rem'
                borderRadius={{ lg:'2px' }}

            >
                <Image
                    display='block'
                    mx='auto'
                    borderRadius={{ lg:'2px' }}
                    src={props.data.isolated_image.localFile.childImageSharp.fixed.src}
                />
                <Text
                    textAlign='center'
                    fontStyle='italic'
                    color='gray.900'
                >
                    { props.data.isolated_image.alt }
                </Text>
            </Box>
            </Wrapper>

    )
}

export default ImageAlone