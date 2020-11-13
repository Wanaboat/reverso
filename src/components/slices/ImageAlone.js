import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const ImageAlone = (props) => {

    console.log('ImageAlone', props)
    return (
        <Wrapper>
            <Box
                w='80vw'
                mx='auto'
                p='1rem'
                borderRadius='2px'
            >

                <Image
                    borderRadius='2px'
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