import React, { useState } from 'react'
import {
    AspectRatioBox,
    Box,
    Flex,
} from '@chakra-ui/core'
import BtnPrimary from './Buttons/primary'
import { FormattedMessage } from 'react-intl'

const Reverso3d = () => {
    const [showPlayer, setShowPlayer] = useState(false)
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
                    src='https://emersya.com/showcase/85N0OLMVM4'
                    allowFullScreen
                />
            </AspectRatioBox>
            <AspectRatioBox
                display={{ xs: 'none', lg: 'block' }}
                maxW="100%"
                w='100%'
                // ratio={{ xs:1.77, lg: }}
                ratio={1.6}
            >
                <Box
                    as="iframe"
                    title="Reverso 3D"
                    src='https://emersya.com/showcase/85N0OLMVM4'
                    allowFullScreen
                    frameborder={ 0 }
                    allow='camera; gyroscope; accelerometer; magnetometer;'
                />
            </AspectRatioBox>
        </>
    )
}

export default Reverso3d