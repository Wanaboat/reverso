import { Link as GatsbyLink } from 'gatsby'
import { Flex } from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <Flex
    as='footer'
    bg='gray.900'
    color='white'
    justify='space-between'
    p='1rem'
  >
    Footer + Privacy Policy Link
  </Flex>

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
