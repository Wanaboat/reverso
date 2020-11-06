import React, { useState } from "react"
import { Box, Button, Flex, Icon, Link, PseudoBox, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import { useIntl } from 'react-intl'

const Menu = ({ lang }) => {
  const locale = useIntl().locale
  const [ isVisible, setIsVisible ] = useState( false )
  const MainNavLink = ({ to, children }) => {
    return(
      <PseudoBox
        mx='1rem'
        // p='.45rem'
        my={{ xs:'1rem', lg:'.35rem' }}
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
    {
      label:'New kinds of sailing',
      url:'/news-kinds-sailing'
    },
    {
      label:'Small sailboats',
      url:'/small-sailboats/'
    },
    {
      label:'About',
      url:'/about/'
    }
  ].map(item =>
    <MainNavLink
      to={ item.url }
    >
      {item.label}
    </MainNavLink>
  )

  items['fr'] = [
    {
      label:'Nouvelle ère de navigation',
      url:'/fr/nouvelle-ere'
    },
    {
      label:'Les dériveurs Reverso',
      url:'/fr/deriveurs/'
    },
    {
      label:'À propos',
      url:'/fr/a-propos/'
    }
  ].map(item =>
    <MainNavLink
      to={ item.url }
    >
      {item.label}
    </MainNavLink>
  )


  return (
    <Flex
      as='nav'
      alignItems='center'
    >
      <Button
        bg='transparent'
        color='gray.50'
        display={{ lg: 'none' }}
        spacing='2px'
        onClick={()=>{ setIsVisible(!isVisible)}}
        _hover={{
          bg:'transparent',
          color:'white'
        }}
      >
        <Icon 
          transition='all 200ms ease'
          transform={ isVisible ? 'rotate(45deg)' : 'rotate(90deg)'}
          name='add'
          size='22px'
        />
    </Button>
      <Flex
        w={{ xs:'100vw', lg:'auto'}}
        h={{ xs:'auto', lg:'auto'}}
        wrap={{xs:'wrap', lg:'nowrap'}}
        position={{ xs:'fixed', lg:'initial'}}
        pointerEvents={{ xs:isVisible ? 'auto' : 'none', lg:'auto' }}
        opacity={{ xs:isVisible ? '1' : '0', lg:'1' }}
        transform={{ xs: isVisible ? 'translateY(72px)' : 'translateY(0px)', lg:'none' }}
        transition='all 200ms ease'
        zIndex='banner'

        left='0'
        top='0'
        // bg='gray.800'
      >
        {items[locale]}
      </Flex>
    </Flex>
  )
}
Menu.propTypes = {
  lang: PropTypes.string,
}

Menu.defaultProps = {
  lang: ``,
}

export default Menu
