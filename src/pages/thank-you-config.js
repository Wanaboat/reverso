import React from 'react'
import {
    Box,
    Flex,
    CSSReset,
    ThemeProvider
  } from '@chakra-ui/core'
  import theme from '../theme'

const ConfigThankyouPage = () => {
    return(
        <ThemeProvider theme={ theme }>
            <CSSReset />
            <Flex
                justify='center'
                alignItems='center'
            >
                Thank-you, you'll receive soon all the details about your inquiry.
            </Flex>
        </ThemeProvider>
    )
}

export default ConfigThankyouPage