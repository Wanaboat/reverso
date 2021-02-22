import React from "react"
import { FormattedMessage, IntlProvider } from "react-intl"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import {
  Box,
  CSSReset,
  ThemeProvider
} from '@chakra-ui/core'
import LanguageSwitcher from './LanguageSwitcher'

import Header from "./Header"
import Footer from "./Footer"
import messagesEN from '../intl/en.json'
import messagesFR from '../intl/fr.json'
import '../css/font.css'
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
          <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <script src="https://assets.experify.io/pluginAssets/js/experifyButton_reverso.min.js" />
        </Helmet>
        <CSSReset />
        <Box
          maxW='100vw'
          // 
          pt={{ xs:'72px', lg:0 }}
        >

        
        <Header
          as='header'
          siteTitle="Reverso" />
        <Box
          minH='calc(100vh - 54px - 27px)'
          // bg='gray.100'
          as='main'
        >
            {children}
          </Box>
        <Footer />
        </Box>
      </ThemeProvider>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
