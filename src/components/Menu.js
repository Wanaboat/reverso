import React, { useState } from "react"
import { Box, Button, Flex, Link, PseudoBox, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"

const Menu = ({ lang }) => {
  const [ isVisible, setIsVisible ] = useState( false )
  const MainNavLink = ({ to, children }) => {
    return(
      <PseudoBox
        mx='1rem'
        // p='.45rem'
        my='.35rem'
        fontWeight='600'
        textTransform='uppercase'
        as={GatsbyLink}
        to={to}
        // borderBottom="solid 2px"
        // borderBottomColor='transparent'
        w={{ xs:'100%', lg:'auto'}}
        onClick={ ()=>{setIsVisible(false)} }
        display='block'
        _hover={{
          // 'borderBottomColor':'brand.2',
          ":after":{
            "width": "100%"
          }
        }}
        _after={{
          "content": '\" \"',
          "display": "block",
          "width": "0px",
          "height": "1px",
          "bg": "brand.2",
          "transition": "width .3s",
        }}
      >
        {children} 
      </PseudoBox>
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
      url:'/fr/nouvelle-ere'
    },
    {
      label:'Les dériveurs Reverso',
      url:'/fr/premier-niveau/second-niveau'
    },
    // {
    //   label:'Technologies',
    //   url:'/fr/premier-niveau/second-niveau/troisieme-niveau'
    // },
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
        onClick={()=>{ setIsVisible(!isVisible)}}
      >
        Button nav
    </Box>
      <Flex
        w={{ xs:'100vw', lg:'auto'}}
        h={{ xs:'100vh', lg:'auto'}}
        wrap={{xs:'wrap', lg:'nowrap'}}
        position={{ xs:'fixed', lg:'initial'}}
        display={{ xs:isVisible? 'flex' : 'none' , lg:'flex'}}
        left='0'
        top='0px'
        bg='gray.800'
      >
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
