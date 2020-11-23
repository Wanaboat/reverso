import React from 'react'
import {
    AspectRatioBox,
    Box,
    Flex,
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const Video = ( props ) => {
    console.log( 'VideoProps', props )
    const regex = /src="(.[^"]+)"/gm;
    const found = props.data.embed.html.match(regex);
    const iframeURL =  found[0].replaceAll('"', '').replace('src=','');

// console.log(found);

    return (
        <Wrapper
            bg={
                props.data.video_background === 'mastic' ? 'brand.4'
                : props.data.video_background === 'gray' ? 'gray.50'
                    : props.data.video_background === 'white' ? 'white'
                        : 'none' }
            id='quote'
            p={{ lg:'1rem' }}
        >
            <AspectRatioBox ratio={16 / 9}>
                <Box
                    w='100%'
                    h='100%'
                    as='iframe'
                    src={ iframeURL }
                />
            </AspectRatioBox>
        </Wrapper>
    )
}

export default Video