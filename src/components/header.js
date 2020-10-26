import Menu from './Menu'
import { Box } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Box as='header'>
          {siteTitle}
          <Menu />
  </Box>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
