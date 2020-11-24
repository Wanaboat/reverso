import React from 'react'
import {
    AspectRatioBox,
    Box,
    Flex,
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const Video = ( props ) => {
    console.log( 'VideoProps', props )
    const regex = /([0-9]+)/g;
    const found = props.data.embed.embed_url.match(regex);
    console.log( 'VideoPropsfound', found )
    let iframeURL =  'https://player.vimeo.com/video/'+found[0]+'?app_id=122963';



// console.log(found);

    return (
        <Wrapper
            bg={
                props.data.video_background === 'mastic' ? 'brand.4'
                : props.data.video_background === 'gray' ? 'gray.50'
                    : props.data.video_background === 'white' ? 'white'
                        : 'none' }
            id='quote'
            p={{ xs:0, lg:'0rem' }}
            mx={{ xs:'-1rem', lg:'auto'}}
            maxW={{ xs:'none', lg:'42rem' }}

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