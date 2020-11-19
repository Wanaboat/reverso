import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const ImageAlone = (props) => {

    console.log('ImageAlone', props)
    return (
        // <Wrapper>
            <Box
                w={{ xs:'100vw', lg:props.data.wide_display ? '70vw' : '42rem' }}
                mx={{ xs:'-1rem', lg:'auto' }}
                // p='1rem'
                borderRadius={{ lg:'2px' }}
                py='1rem'
            >
                <Image
                    display='block'
                    mx='auto'
                    w='100%'
                    borderRadius={{ lg:'2px' }}
                    src={props.data.isolated_image.localFile ? props.data.isolated_image.localFile.childImageSharp.fixed.src : props.data.isolated_image.fixed.src }
                />
                <Text
                    textAlign='center'
                    fontStyle='italic'
                    color='gray.700'
                    fontSize={{ xs:'12px', lg:'14px'}}
                >
                    { props.data.isolated_image.alt }
                </Text>
            </Box>
            // </Wrapper>

    )
}

export default ImageAlone