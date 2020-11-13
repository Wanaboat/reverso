import React from 'react'
import { Box } from '@chakra-ui/core'
import Gallery from '../Gallery'
import Wrapper from '../Wrapper'

const GalleryWall = (props) => {
    console.log( 'gallerywall', props)
    return (
        <Wrapper>
        <Box
            w='80vw'
            mx='auto'
            p='1rem'
            borderRadius='2px'
        >

            <Gallery
                pictures={props.items}
            />
        </Box>
        </Wrapper>
    )
}

export default GalleryWall