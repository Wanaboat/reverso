import React from 'react'
import { Box } from '@chakra-ui/core'
import Gallery from '../Gallery'
import Wrapper from '../Wrapper'

const GalleryWall = (props) => {
    return false
    console.log( 'gallerywall', props)
    return (
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
    )
}

export default GalleryWall