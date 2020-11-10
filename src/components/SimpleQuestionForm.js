import React, { useState } from 'react'
import {
    Box,
    Flex,
    Button,
    AspectRatioBox
} from '@chakra-ui/core'
import BtnPrimary from './Buttons/primary'

const SimpleQuestionForm = () => {
    const [ formVisible, setFormVisible ] = useState(false)
    return(
        !formVisible ?
        <AspectRatioBox ratio={16 / 9}
                bg='gray.50'
                justifyContent='center'
                alignItems='center'
                h='100%'
                display='flex'
            >
                <BtnPrimary
                    handleClick={ ()=>{ setFormVisible(true)} }
                >
                    Posez-nous vos questions
                </BtnPrimary>
            </AspectRatioBox>
        :
            <AspectRatioBox ratio={16 / 9}>
                <Box
                    as="iframe"
                    src='https://form.typeform.com/to/EimY5yHO' />
            </AspectRatioBox>
        
    )
}

export default SimpleQuestionForm