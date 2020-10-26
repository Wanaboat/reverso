import { Box, Button, Stack } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ siteTitle }) => (
  <Box as='nav'>
    <Box
      as={Button}
      color='gray.500'
      display={{ lg: 'none' }}
      spacing='2px'
    >
      Button nav
    </Box>
  </Box>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
