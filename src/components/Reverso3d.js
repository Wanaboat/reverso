import React, { useState } from 'react'
import {
    AspectRatioBox,
    Flex,
    Button,
    Box,
} from '@chakra-ui/core'
import BtnPrimary from './Buttons/primary'
import { FormattedMessage } from 'react-intl'
import Emersea3dPlayer from '../components/Emersea3dPlayer'

const Reverso3d = ({ url }) => {
    const [showPlayer, setShowPlayer] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    
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
            <AspectRatioBox
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
                
            </AspectRatioBox>
            <Flex justifyContent='flex-end' mt={ 2 }>
                <BtnPrimary
                    handleClick={ ()=>{setModalOpen( true )} }
                >
                    Open 3d in Fullscreen
                </BtnPrimary>
            </Flex>
            <Emersea3dPlayer
                isOpen={ modalOpen }
                handleClose={ ()=>{setModalOpen( false ) }}
            />
        </>
    )
}

export default Reverso3d