import React from "react"
import { Box, Button, Flex, Link, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import { FormattedMessage, useIntl } from 'react-intl'
import TryItButton from './Buttons/try'
const LanguageSwitcher = ({ siteTitle }) => {
  const locale = useIntl().locale
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
          as={GatsbyLink}
          to={locale === 'en' ? '/fr' : '/'}
          _hover={{
            bg: 'rgba(100,100,100,.2)'
          }}
        >
          {locale === 'en' ? 'Fr' : 'En'}
        </Button>
        <TryItButton />
      </Stack>
      
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
