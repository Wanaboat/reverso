import React, { useState } from "react"
import {
    Box
} from '@chakra-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import BtnPrimary from './primary'
import TryItWizard from '../TryItWizard'
import ReactGA from 'react-ga';

const TryItButton = () => {
    ReactGA.initialize( process.env.GATSBY_GA_ID );
    const [openTryWizard, setOpenTryWizard] = useState(false)
    const trackTryIt = () => {
        ReactGA.event({
            category: "TryIt",
            action: "StartWizard"
        });
    }
    return (
        <>
            <BtnPrimary
                handleClick={() => {
                    setOpenTryWizard(!openTryWizard)
                    trackTryIt()
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