import React, { useState } from 'react'
import {
    AspectRatioBox,
    Box,
    Flex,
} from '@chakra-ui/core'
import BtnPrimary from './Buttons/primary'

const Reverso3d = () => {
    const [showPlayer, setShowPlayer] = useState(false)
    return (
        !showPlayer ?
            <Flex
                minH={{ xs: '200px', lg: '500px' }}
                alignItems='center'
                justifyContent='center'
                bg='brand.3'
                id='3d'
            >
                <BtnPrimary
                    handleClick={() => { setShowPlayer(true) }}
                >Discover Reverso in 3d</BtnPrimary>
            </Flex>
            :
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
                        src='https://emersya.com/presets/85N0OLMVM4'
                        allowFullScreen
                    />
                </AspectRatioBox>
                <AspectRatioBox
                    display={{ xs: 'none', lg: 'block' }}
                    maxW="100%"
                    w='100%'
                    // ratio={{ xs:1.77, lg: }}
                    ratio={1.5}
                >
                    <Box
                        as="iframe"
                        title="Reverso 3D"
                        src='https://emersya.com/presets/85N0OLMVM4'
                        allowFullScreen
                    />
                </AspectRatioBox>
            </>

    )
}

export default Reverso3d