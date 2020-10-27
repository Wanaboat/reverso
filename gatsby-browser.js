// gatsby-browser.js

import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'
import './src/css/font.css'
export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)

