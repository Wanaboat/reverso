import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Flex,
    Grid,
    Text,
    Image,
    Heading,
    Stack
} from '@chakra-ui/core'

import Wrapper from '../Wrapper'
import BtnPrimary from '../Buttons/primary'
import Wysiwyg from '../Wysiwyg'
import { linkResolver } from '../../prismic-configuration'

const SliceBannerAndDescription = ({ data }) => {
    console.log('SliceBannerAndDescription', data)
    if( !data ){ return null }
    return (
        <Wrapper
            mt='2px'
            bg='white'
            py='4rem'
        >
            <Grid
                gap='4rem'
                templateColumns={{ xs: '100%', lg: '1fr 1fr' }}
            >
                <Box order='2'>
                    <Box
                        as='picture'>
                        <Image
                            // mx='-1rem'
                            // w='calc( 120% + 2rem )' 
                            h='auto'
                            // objectFit='cover'
                            src={data.image1.localFile.childImageSharp.fixed.src }
                        />
                        {data.image1.alt ? <Text fontStyle='italic'>{ data.image1.alt }</Text> : null }
                    </Box>

                    {/* </Box> */}
                </Box>
                <Stack order='1' spacing='2rem' justify='center'>
                    <Heading
                        as='p'
                        fontWeight='600'
                        fontSize='24px'
                    >
                        Reverso Sailing dinghy : Meet our full range
                    </Heading>
                    { data.content ? 
                        <Wysiwyg data={ data.content.raw } />
                    : "null"}

                    {/* <Text>
                        3 different, hulls colors, many tech equipements possibilities and several options : your Reverso will be like no other.
                    </Text> */}
                    { data.button_label ? 
                    <Box mt='1rem'>
                        <BtnPrimary
                            to={linkResolver( data.button_target.document )}
                            as={ GatsbyLink }
                        >
                            { data.button_label }
                        </BtnPrimary>
                        
                    </Box>
                    : null}

                </Stack>
            </Grid>
        </Wrapper>
    )
}
export default SliceBannerAndDescription 