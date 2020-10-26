import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  CSSReset,
  ThemeProvider
} from '@chakra-ui/core'

import Header from "./header"
// import "./layout.css"

const Layout = ({ lang, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider>
      <Helmet>
        <html lang={lang} />
      </Helmet>
      <CSSReset />
      <Header
        as='header'
        siteTitle={data.site.siteMetadata?.title || `Title`} />

      <Box
      color='white'
      minH='calc(100vh - 54px - 27px)'
        bg='gray.100' as='main'>{children}</Box>
      <Box
        as='footer'
        bg='gray.900'
        color='white'
      >
        Reverso Footer
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
