import React, { useState } from "react"
import { Box, Button, Flex, Link, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import BtnPrimary from '../components/Buttons/primary'
import TryItWizard from '../components/TryItWizard'
import { FormattedMessage, useIntl } from 'react-intl'

const LanguageSwitcher = ({ siteTitle }) => {
  const locale = useIntl().locale
  const [openTryWizard, setOpenTryWizard] = useState(false)
  return (
    <>
    <Stack isInline spacing='1rem'>
  
      <Button
          variant='ouline'
            alignItems='center'
            border='solid 1px'
            borderColor='white'
            px='.5rem'
            borderRadius='3px'
            as={ GatsbyLink }
            to={ locale === 'en' ? '/fr' : '/' }
      >
        { locale === 'en' ? 'Fr' : 'En' }
      </Button>
        
        {/* <Link as={ GatsbyLink } to='/fr'>Fr</Link> */}

        {/* <Link as={ GatsbyLink } to='/'>En</Link> */}
        
      <BtnPrimary
        as={GatsbyLink}
        
        handleClick={ ()=>{
          setOpenTryWizard( !openTryWizard ) 
          // console.log('wizard')
        }}
      >
        <FormattedMessage id="try.it" />
    </BtnPrimary>
    </Stack>
      <TryItWizard
        isActive={ openTryWizard }
        handleClose={ () => { setOpenTryWizard( false ) } }
      />
    </>
  )
}

LanguageSwitcher.propTypes = {
  siteTitle: PropTypes.string,
}

LanguageSwitcher.defaultProps = {
  siteTitle: ``,
}

export default LanguageSwitcher
