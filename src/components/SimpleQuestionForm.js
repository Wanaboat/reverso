import React from 'react'
import {
    Box,
    Flex,
    Button,
    AspectRatioBox
} from '@chakra-ui/core'
import BtnPrimary from './Buttons/primary'
import { FormattedMessage } from 'react-intl'

const SimpleQuestionForm = () => {
    return(
        // !formVisible ?
        //     <AspectRatioBox ratio={16 / 9}
        //         bg='gray.50'
        //         justifyContent='center'
        //         alignItems='center'
        //         h='100%'
        //         display='flex'
        //     >
        //         <BtnPrimary
        //             handleClick={ ()=>{ setFormVisible(true)} }
        //         >
        //             <FormattedMessage id="ask.your.questions" />
        //         </BtnPrimary>
        //     </AspectRatioBox>
        // :
            <AspectRatioBox ratio={16 / 9}>
                <Box
                    as="iframe"
                    src='https://form.typeform.com/to/EimY5yHO' />
            </AspectRatioBox>
        
    )
}

export default SimpleQuestionForm