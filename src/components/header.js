import Menu from './Menu'
import { Box, Flex } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Flex
    as='header'
    bg='gray.900'
    color='white'
    justify='space-between'
  >
    <Box>
    {siteTitle}

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
