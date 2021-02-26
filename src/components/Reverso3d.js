import React, { useState } from 'react'
import {
    AspectRatioBox,
    Button,
    Box,
    Heading,
    Flex,
    Image,
    Stack,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import BtnPrimary from './Buttons/primary'
import { FormattedMessage } from 'react-intl'
import Emersea3dPlayer from '../components/Emersea3dPlayer'
import Illu3dPreview from '../images/3d-preview.png'
import Wrapper from './Wrapper'

const Reverso3d = ({ url }) => {
    const [showPlayer, setShowPlayer] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const bgUrl = 'https://d3vmktulshtd50.cloudfront.net/cl/2KPN89JS79/v/QAQD7Q8CIL/preview.png'
    return (
        // <Flex
        //     minH={{ xs: '200px', lg: '500px' }}
        //     alignItems='center'
        //     justifyContent='center'
        //     bg='brand.3'
        //     id='3d'
        // >
        //     <BtnPrimary
        //         handleClick={() => { setShowPlayer(true) }}
        //     >
        //         <FormattedMessage id='discover.3d' />
        //     </BtnPrimary>
        // </Flex>
        <>

            <Box
                // backgroundImage={`url(${bgUrl})`}
                backgroundPosition='top center'
                backgroundRepeat='no-repeat'
                backgroundSize='auto 100%'
                // h='100vh'
                backgroundColor='#171923'
                id='3d-viewer'
            >
                <SimpleGrid
                    columns={{ xs: 1, lg: 2 }}
                >
                    <Box>
                        <Flex
                            alignItems='center'
                        >
                            <Image
                                objectFit='contains'
                                src={bgUrl} alt='Reverso 3d'
                            />
                        </Flex> 
                    </Box>
                    <Flex
                        alignItems='center'
                        p={{ xs:5, lg: 10}}
                    >
                        <Stack
                            spacing={{ xs:4, lg: 10 }}
                            maxW={{ xs:'auto', lg:'48rem' }}
                        >
                            <Heading
                                w='100%'
                                color='white'
                                fontWeight='300'
                            >
                                <FormattedMessage id="3d.block.title" />
                            </Heading>
                            <Text
                                w='100%'
                                color='white'
                                fontSize={{ xs: '18px', lg:'22px'}}
                            >
                                <FormattedMessage
                                    id='3d.block.introduction'
                                />
                            </Text>
                            <Box
                                w='100%'
                            >
                                <BtnPrimary
                                    handleClick={() => { setModalOpen(true) }}
                                >
                                    <FormattedMessage
                                        id='3d.open'
                                    />
                            </BtnPrimary>

                            </Box>


                        </Stack>
                    </Flex>


                </SimpleGrid>


            </Box>

            {/* <AspectRatioBox
                display={{ xs: 'block', lg: 'none' }}
                maxW="100%"
                w='100%'
                // ratio={{ xs:1.77, lg: }}
                ratio={0.7}
            >
                <Box
                    as="iframe"
                    title="Reverso 3D"
                    src={ url ? url : 'https://emersya.com/presets/85N0OLMVM4'}
                    allowFullScreen
                />
            </AspectRatioBox>
            <AspectRatioBox
                display={{ xs: 'none', lg: 'block' }}
                maxW="100%"
                w='100%'
                // ratio={{ xs:1.77, lg: }}
                ratio={1.2}
            >

            <Box
                as="iframe"
                title="Reverso 3D"
                src={ url ? url : 'https://emersya.com/presets/85N0OLMVM4'}
                allowFullScreen
                frameborder={ 0 }
                allow='camera; gyroscope; accelerometer; magnetometer;'
            />
                
            </AspectRatioBox> */}

            <Emersea3dPlayer
                isOpen={modalOpen}
                handleClose={() => { setModalOpen(false) }}
            />
        </>
    )
}

export default Reverso3d