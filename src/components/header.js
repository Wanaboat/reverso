import Menu from './Menu'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Flex
    as='header'
    bg='gray.900'
    color='white'
    justify='space-between'
    p='1rem'
  >
    <Box>
      <Button
        as={GatsbyLink}
        to='/'
        color='gray.800'
      >
        {siteTitle}
      </Button>
    </Box>
    <Menu />
  </Flex>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
