import { Box, Button, Flex, Link, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ lang }) => {

  const MainNavLink = ({ to, children }) => {
    return(
      <Box
        mx='1rem'
        p='.45rem'
        as={GatsbyLink}
        to={to}>
        {children} 
      </Box>
    )
  }

  let items = []

  items['en'] = [
    'New kinds of sailing',
    'Rerverso sailboats',
    'Technologies',
    'About'
  ].map(item =>
    <MainNavLink>
      {item}
    </MainNavLink>
  )

  items['fr'] = [
    {
      label:'Nouvelle ère de navigation',
      url:'/fr/premier-niveau'
    },
    {
      label:'Les dériveurs Reverso',
      url:'/fr/premier-niveau/second-niveau'
    },
    {
      label:'Technologies',
      url:'/fr/premier-niveau/second-niveau/troisieme-niveau'
    },
    {
      label:'À propos',
      url:'/fr/premier-niveau/second-niveau/troisieme-niveau/quatrieme-niveau'
    }
  ].map(item =>
    <MainNavLink
      to={ item.url }
    >
      {item.label}
    </MainNavLink>
  )


  return (
    <Box as='nav'>
      <Box
        as={Button}
        color='gray.500'
        display={{ lg: 'none' }}
        spacing='2px'
      >
        Button nav
    </Box>
      <Flex>
        {items[lang]}
      </Flex>
    </Box>
  )
}
Menu.propTypes = {
  lang: PropTypes.string,
}

Menu.defaultProps = {
  lang: ``,
}

export default Menu
