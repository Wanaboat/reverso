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
                <Box
                    order={ data.reverse_position ? 2 : 1 }
                >
                    <Box
                        display='block'
                        w={{ xs:'calc( 100vw  )' , lg:'auto' }}
                        mr={{ xs:'-1rem', lg:'0' }}
                        ml={{ xs:'-1rem', lg:'0' }}
                        as='picture'
                    >
                        <Image
                            // mx='-1rem'
                            
                            h='auto'
                            
                            display='block'
                            // objectFit='cover'
                            src={data.image1.localFile.childImageSharp.fixed.src }
                        />
                        {data.image1.alt ? <Text textAlign={{ xs:'center', lg:'left' }} px={{ xs:'1rem', lg:0 }} fontStyle='italic'>{ data.image1.alt }</Text> : null }
                    </Box>

                    {/* </Box> */}
                </Box>
                <Stack
                    order={ data.reverse_position ? 1 : 2 }
                    spacing='2rem'
                    justify='center'
                >
                    {/* <Heading
                        as='p'
                        fontWeight='600'
                        fontSize='24px'
                    >
                        Reverso Sailing dinghy : Meet our full range
                    </Heading> */}
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