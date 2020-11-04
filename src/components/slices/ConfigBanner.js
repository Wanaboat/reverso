import React from 'react'
import {
    Box,
    Flex,
    Grid,
    Text,
    Image,
    Heading,
    Stack,
    PseudoBox
} from '@chakra-ui/core'

import Wrapper from '../Wrapper'
import BtnPrimary from '../Buttons/primary'
import Img1 from '../../images/reverso-shooting-1.jpg'

const ConfigBanner = () => {
    return (
        <Wrapper
            mt='2px'
            bg='white'
            py='4rem'
        >
            <Grid
                gap='4rem'
                templateColumns={{ xs: '100%', lg: '50% 50%' }}
            >
                <Box order='1'>



                    <PseudoBox
                        role="group"
                        bg='red.100'
                        position='relative'
                        cursor='pointer'
                        transition='* 200ms ease'

                    >
                        <PseudoBox
                            display='flex'
                            position='absolute'
                            top='0'
                            left='0'
                            w='100%'
                            h='100%'
                            alignItems='center'
                            transition='all 200ms ease'
                            _groupHover={{ bg: 'rgba(0,0,0,0.1)' }}
                        >
                            <PseudoBox
                                w='100%'
                                color='white'
                                bg='rgba(0,0,0,0.3)'
                                fontSize={{ xs: '20px', lg: '48px' }}
                                lineHeight={{ lg: '3rem' }}
                                textTransform='uppercase'
                                fontWeight='bold'
                                p='2rem'
                                pl='2rem'
                                transition='all 200ms ease'
                                _groupHover={{ pl: "4rem" }}
                            >
                                Easy<br /> Sailing
                        </PseudoBox>

                        </PseudoBox>
                        <Image src={Img1} alt='alt' />
                    </PseudoBox>



                </Box>
                <Stack order='2' spacing='2rem' justify='center'>
                    <iframe frameborder="0" height="100%" src="https://form.typeform.com/to/Gp9WdB?typeform-embed=embed-widget&amp;typeform-embed-id=zt4hx" width="100%" allow="camera; microphone; autoplay; encrypted-media;" data-qa="iframe" title="typeform-embed" style={{ 'minHeight': '600px', 'border': '0px' }}></iframe>


                </Stack>
            </Grid>
        </Wrapper>
    )
}
export default ConfigBanner 