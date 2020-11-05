import React from 'react'
import {
    Box
} from '@chakra-ui/core'

import Gallery from 'react-photo-gallery'

const PicturesGallery = ({ pictures }) => {

    const formatArray = ( arr ) => {
        const cleanArray = []
        for (let index = 0; index < arr.length; index++) {
            const img = arr[index];
            cleanArray.push(
                {
                    src:img.picture.localFile.publicURL,
                    width:img.picture.dimensions.width,
                    height:img.picture.dimensions.height,
                }
            )
            
        }
        return cleanArray
    }
    const photos = formatArray( pictures )
    return(
        <Box>
           <Gallery photos={ photos } />
        </Box>
    )
}

export default PicturesGallery