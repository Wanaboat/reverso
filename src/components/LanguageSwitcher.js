import React, { useState } from "react"
import { Box, Flex, Link, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import BtnPrimary from '../components/Buttons/primary'
import TryItWizard from '../components/TryItWizard'
import { FormattedMessage } from "gatsby-plugin-intl"

const LanguageSwitcher = ({ siteTitle }) => {
  const [openTryWizard, setOpenTryWizard] = useState(false)
  return (
    <>
    <Stack isInline spacing='1rem'>
      <Flex alignItems='center'>
        <Link as={ GatsbyLink } to='/'>En</Link>
        /
        <Link as={ GatsbyLink } to='/fr'>Fr</Link>
      </Flex>
      <BtnPrimary
        as={GatsbyLink}
        handleClick={ ()=>{
          setOpenTryWizard( !openTryWizard ) 
          // console.log('wizard')
        }}
      >
        {/* <FormattedMessage id="try.it" /> */}
        Try it
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
