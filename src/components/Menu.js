import { Box } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ siteTitle }) => (
  <Box as='nav'>
         Navigation
  </Box>


)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
