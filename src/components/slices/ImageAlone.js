import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const ImageAlone = (props) => {

    // console.log('ImageAlone', props)
    const { data } = props

    return (
        // <Wrapper>
        <Box
            bg={
                data.isolated_image_background === 'white' ? 'white' :
                    data.isolated_image_background === 'gray' ? 'gray.50' :
                        data.isolated_image_background === 'mastic' ? 'brand.4' :
                            data.isolated_image_background === 'dark' ? 'brand.3' :
                                'transparent'
            }
        >
            <Box
                w={{ xs: '100vw', lg: props.data.wide_display ? '70vw' : '42rem' }}
                mx={{ xs: '0rem', lg: 'auto' }}
                borderRadius={{ lg: '2px' }}
                py='1rem'

            >
                <Image
                    display='block'
                    mx='auto'
                    w='100%'
                    borderRadius={{ lg: '2px' }}
                    src={props.data.isolated_image.localFile ? props.data.isolated_image.localFile.childImageSharp.fixed.src : props.data.isolated_image.fixed.src}
                />
                <Text
                    textAlign='left'
                    fontStyle='italic'
                    color='gray.700'
                    fontSize={{ xs: '12px', lg: '14px' }}
                >
                    {props.data.isolated_image.alt}
                </Text>
            </Box>
        </Box>
        // </Wrapper>
    )
}

export default ImageAlone