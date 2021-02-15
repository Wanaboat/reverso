import Menu from './Menu'
import LanguageSwitcher from './LanguageSwitcher'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Image } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"
import { FormattedMessage } from 'react-intl'
import Wrapper from '../components/Wrapper'
import logoTypo from '../images/logo-r-white.svg'

const Header = ({ siteTitle }) => (
  <Box
    as='header'
    bg='gray.900'
    color='white'
    p={{ lg:'1rem' }}
    py={{ xs:'0rem', lg:'.5rem' }}
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
            maxW={{ xs:'150px', lg:'160px'}}
            w={{ xs:'150px', lg:'180px'}}
            src={logoTypo}
            alt='Reverso Project'
            h='65px'
            
          />
        </Flex>

        <Menu lang='fr' />
        <Flex display={{ xs: 'none', lg: 'Flex' }} alignItems='center'>
          <LanguageSwitcher />
        </Flex>
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
