import React from 'react'
import {
    AspectRatioBox,
    Box,
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const YoutubeVideo = (data) => {
    var regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const found = data.data.embed_url.match(regex);
    let iframeURL = `https://www.youtube.com/embed/${found[2]}?feature=oembed`
    return(
        <AspectRatioBox ratio={16 / 9}>
            <Box
                w='100%'
                h='100%'
                as='iframe'
                src={ iframeURL }
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </AspectRatioBox>
    )
}
const VimeoVideo = (data) => {
    const regex = /([0-9]+)/g;
    const found = data.data.embed_url.match(regex);
    let iframeURL =  'https://player.vimeo.com/video/'+found[0]+'?app_id=122963';
    return (
        <AspectRatioBox ratio={16 / 9}>
            <Box
                w='100%'
                h='100%'
                as='iframe'
                src={ iframeURL }
            />
        </AspectRatioBox>
    )
} 

const Video = ( props ) => {
  
    return (
        props.data.embed.embed_url ? 
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
                {
                    props.data.embed.provider_name === 'Vimeo' ? <VimeoVideo data={ props.data.embed } />
                    : props.data.embed.provider_name === 'YouTube' ? <YoutubeVideo data={ props.data.embed } />
                    : 'unknown provider'
                }
            </Wrapper>
        : null
    )
}

export default Video