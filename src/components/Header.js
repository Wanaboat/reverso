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
    p={{ lg:'1rem' }}
    py='1rem'
    position={{ xs:'fixed', lg:'initial'}}
    top='0'
    left='0'
    w='100vw'
    zIndex='tooltip'
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
          <Image
            // style={{ display: 'block' }}
            display='block'
            maxW={{ xs:'100px', lg:'160px'}}
            src={logoTypo}
            alt='Reverso Project'
            w={{ xs:'100px', lg:'160px'}}
            h='40px'
            
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
