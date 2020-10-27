import { Box, Link, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import BtnPrimary from '../components/Buttons/primary'

const LanguageSwitcher = ({ siteTitle }) => (
  <Stack isInline spacing='1rem'>
    EN / FR
    <BtnPrimary
      as={ GatsbyLink }
    >
      Try it
    </BtnPrimary>
  </Stack>
)

LanguageSwitcher.propTypes = {
  siteTitle: PropTypes.string,
}

LanguageSwitcher.defaultProps = {
  siteTitle: ``,
}

export default LanguageSwitcher
