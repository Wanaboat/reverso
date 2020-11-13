import React, {useState, useCallback} from 'react'
import {
    Box
} from '@chakra-ui/core'

import Gallery from 'react-photo-gallery'
import GalleryModal from './GalleryModal'

const PicturesGallery = ({ pictures }) => {
    const [ current, setCurrent ] = useState( false )

    const formatArray = ( arr ) => {
        const cleanArray = []
        for (let index = 0; index < arr.length; index++) {
            const img = arr[index];
            cleanArray.push(
                {
                    src:img.picture.localFile.childImageSharp.fixed.src,
                    width:img.picture.dimensions.width,
                    height:img.picture.dimensions.height,
                }
            )
        }
        return cleanArray
    }
    const photos = formatArray( pictures )
    const openModal = useCallback((event, { photo, index }) => {
        // setCurrentImage(index);
        console.log( index )
        setCurrent( index + 1 )
        // setViewerIsOpen(true);
      }, []);
    return(
        <Box>
            <GalleryModal
                pictures={ pictures }
                index={ current }
                isVisible={ current ? true : false}
                handleClose={ () => { setCurrent(false) }}
                handlePrev={ () => { current === 1 ? setCurrent( pictures.length ) : setCurrent( current - 1 ) }}
                handleNext={ () => { current === pictures.length ? setCurrent(1) : setCurrent( current + 1 ) }}
            />
           <Gallery
            photos={ photos }
            onClick={ openModal }
            />
        </Box>
    )
}

export default PicturesGallery