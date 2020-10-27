import React from "react"
import { FormattedMessage, IntlProvider } from "react-intl"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import {
  Box,
  CSSReset,
  ThemeProvider
} from '@chakra-ui/core'

import Header from "./Header"
import Footer from "./Footer"
import messagesEN from '../intl/en.json'
import messagesFR from '../intl/fr.json'

import theme from '../theme'

const Layout = ({ lang, children }) => {
  let messages = []
  messages[ 'en' ] = messagesEN
  messages[ 'fr' ] = messagesFR
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <ThemeProvider theme={ theme }>
        <Helmet>
          <html lang={lang} />
        </Helmet>
        <CSSReset />
        <Header
          as='header'
          siteTitle="Reverso" />
        <Box
          color='white'
          minH='calc(100vh - 54px - 27px)'
          bg='gray.100' as='main'>
            {children}
          </Box>
        <Footer />
      </ThemeProvider>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
