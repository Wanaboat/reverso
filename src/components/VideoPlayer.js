import React from 'react'
import {
    Box
} from '@chakra-ui/core'

const VideoPlayer = ({ src, poster }) => {
    return(
        <Box>
            <video
                width="100%"
                height="100%"
                autoplay
                controls
                poster={ poster }
            >
                <source src={src} controls type="video/mp4" />
            </video>
        </Box>
    )
}

export default VideoPlayer