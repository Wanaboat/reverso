import React, { useState } from "react"
import { Box, Button, Flex, Icon, Link, PseudoBox, Stack } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import { useIntl } from 'react-intl'
import BtnPrimary from "./Buttons/primary"
import TryItButton from './Buttons/try'

const Menu = ({ lang }) => {
  const locale = useIntl().locale
  const [isVisible, setIsVisible] = useState(false)
  const MainNavLink = ({ to, children }) => {
    return (
      <PseudoBox
        mx='1rem'
        // p='.45rem'
        my={{ xs: '1rem', lg: '.35rem' }}
        fontWeight='600'
        textTransform='uppercase'
        as={GatsbyLink}
        to={to}
        // borderBottom="solid 2px"
        // borderBottomColor='transparent'
        w={{ xs: '100%', lg: 'auto' }}
        onClick={() => { setIsVisible(false) }}
        display='block'
        _hover={{
          // 'borderBottomColor':'brand.2',
          ":after": {
            "width": "100%",
            "opacity": 1
          }
        }}
        _after={{
          "content": '\" \"',
          "display": "block",
          "width": "80%",
          "height": "1px",
          "bg": "brand.2",
          "opacity": "0",
          "transition": "all .3s ease",
        }}
      >
        {children}
      </PseudoBox>
    )
  }

  let items = []

  items['en'] = [
    {
      label: 'New sailing culture',
      url: '/new-sailing-culture/'
    },
    {
      label: 'Small sailboats',
      url: '/small-sailboats/'
    },
    {
      label: 'About',
      url: '/about-reverso/'
    }
  ].map(item =>
    <MainNavLink
      key={item.url}
      to={item.url}
    >
      {item.label}
    </MainNavLink>
  )

  items['fr'] = [
    {
      label: 'Nouvelle culture',
      url: '/fr/navigation-nouvelle-culture/'
    },
    {
      label: 'Les dériveurs Reverso',
      url: '/fr/nos-deriveurs/'
    },
    {
      label: 'À propos',
      url: '/fr/a-propos/'
    }
  ].map(item =>
    <MainNavLink
      to={item.url}
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
        onClick={() => { setIsVisible(!isVisible) }}
        _hover={{
          bg: 'transparent',
          color: 'white'
        }}
      >
        <Icon
          transition='all 200ms ease'
          transform={isVisible ? 'rotate(45deg)' : 'rotate(90deg)'}
          name='add'
          size='22px'
        />
      </Button>
      <Flex
        w={{ xs: '100vw', lg: 'auto' }}
        h={{ xs: 'auto', lg: 'auto' }}
        wrap={{ xs: 'wrap', lg: 'nowrap' }}
        position={{ xs: 'fixed', lg: 'initial' }}
        pointerEvents={{ xs: isVisible ? 'auto' : 'none', lg: 'auto' }}
        opacity={{ xs: isVisible ? '1' : '0', lg: '1' }}
        transform={{ xs: isVisible ? 'translateY(72px)' : 'translateY(0px)', lg: 'none' }}
        transition='all 200ms ease'
        zIndex='banner'

        left='0'
        top='0'

        bg={{ xs: 'gray.800', lg: 'transparent' }}
      >
        {items[locale]}
        <Box
          m='1rem'
          mt='0'
          display={{ xs:'block', lg:'none'}}
        >
          <TryItButton />
        </Box>

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
