import React, { useEffect, useState, useCallback } from 'react'
import {
    Box,
    Button,
    Image
} from '@chakra-ui/core'

import Gallery from 'react-photo-gallery'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const PicturesGallery = ({ pictures }) => {
    const [current, setCurrent] = useState(false)

    const formatArray = (arr) => {
        const cleanArray = []
        for (let index = 0; index < arr.length; index++) {
            const img = arr[index];
            cleanArray.push(
                {
                    src: img.picture.localFile ? img.picture.localFile.childImageSharp.fixed.src : img.picture.fixed.src,
                    width: img.picture.dimensions.width,
                    height: img.picture.dimensions.height,
                }
            )

        }
        return cleanArray
    }
    const photos = formatArray(pictures)
    console.log('photos', photos)
    const Items = () => {
        return (

            photos.map((item, index) =>
                <Slide index={index}>
                    <Box
                        // p={{ xs: '1rem 4rem' }}
                        position='relative'
                        h='600px'
                    >
                        <Image
                            w='100%'
                            src={item.src}
                        />
                    </Box>
                </Slide>

            )
        )
    }

    return (
        <Box
            mx={{ xs: '-1rem', lg: '0' }}
            position='relative'
        >
            <CarouselProvider
                naturalSlideWidth={1150}
                naturalSlideHeight={600}
                totalSlides={photos.length}
            >
                <Slider>
                    <Items />
                </Slider>
                <Box
                    position='absolute'
                    bottom='-1.5rem'
                    left='1rem'
                    bg='brand.3'
                    p='.5rem .75rem'
                >
                    <Button
                        variant='ghost'
                        color='white'
                        as={ButtonBack}
                        transition='transform 200ms ease'
                        _hover={{
                            bg:'transparent',
                            color:'white',
                            transform:'translateX(-.5rem)'
                        }}
                    >←</Button>
                    <Button
                        variant='ghost'
                        color='white'
                        as={ButtonNext}
                        transition='transform 200ms ease'
                        _hover={{
                            bg:'transparent',
                            color:'white',
                            transform:'translateX(.5rem)'
                        }}
                    >→</Button>
                </Box>
            </CarouselProvider>

        </Box>
    )
}

export default PicturesGallery