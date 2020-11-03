import Menu from './Menu'
import LanguageSwitcher from './LanguageSwitcher'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Image } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"
import { FormattedMessage } from 'react-intl'
import Wrapper from '../components/Wrapper'
import logoTypo from '../images/logo-typo.svg'

const Header = ({ siteTitle }) => (
  <Box
    as='header'
    bg='gray.900'
    color='white'
    p='1rem'
  >
    <Wrapper>
      <Flex
        justifyContent='space-between'
        w='100%'
      >
        <Flex
          as={GatsbyLink}
          to='/'
        >
          <img
            style={{ display: 'block' }}
            src={logoTypo}
            alt='Reverso Project'
          />
        </Flex>

        <Menu lang='fr' />
        <Box display={{ xs: 'none', lg: 'block' }}>
          <LanguageSwitcher />

        </Box>
      </Flex>

    </Wrapper>

  </Box>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
