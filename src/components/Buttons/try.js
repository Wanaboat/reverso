import React, { useState } from "react"
import {
    Box
} from '@chakra-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import BtnPrimary from './primary'
import TryItWizard from '../TryItWizard'

const TryItButton = () => {
    const [openTryWizard, setOpenTryWizard] = useState(false)

    return (
        <>
            <BtnPrimary
                handleClick={() => {
                    setOpenTryWizard(!openTryWizard)
                    // console.log('wizard')
                }}
            >
                <FormattedMessage id="try.it" />
            </BtnPrimary>
            <TryItWizard
                isActive={openTryWizard}
                handleClose={() => { setOpenTryWizard(false) }}
            />
        </>
    )
}

export default TryItButton