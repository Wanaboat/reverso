import { Link as GatsbyLink } from 'gatsby'
import {
  Box,
  Flex,
  Grid,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/core'
import PropTypes from "prop-types"
import React from "react"
import logoTypo from '../images/logo-typo.svg'
import { FormattedMessage } from 'react-intl'

const Footer = ({ siteTitle }) => (
  <Flex
    as='footer'
    bg='brand.3'
    color='white'
    justify='space-between'
    p='1rem'
  >
    <Grid
      maxW='800px'
      m='4rem'
      mx='auto'
      templateColumns={{ xs: '100%', lg: '180px 1fr' }}
      gap='2rem'
    >
      <Box>
        <Image
          src={ logoTypo }
          alt='Reverso'
        />
      </Box>
      <Stack spacing='1.5rem' letterSpacing='.05rem'>
        <Stack spacing='.5rem' letterSpacing='.15rem'>
          <Text
            color='gray.100'
            fontWeight='600'
            fontSize='18px'
          >
            <FormattedMessage id='footersentence1' />
        </Text>
          <Text
            color='gray.400'
            fontWeight='600'
            fontSize='18px'
          >
            <FormattedMessage id='footersentence2' />
        </Text>
        </Stack>
        <Box>
          <Text
            color='white'
            fontSize='16px'
            fontWeight='600'
          >Reverso project :</Text>
          <Text
            color='gray.50'
            fontSize='14px'
          >
            10 parc club du millénaire • 1025 av Henri Becquerel • 34000 Montpellier FRANCE • tel : +33 6 95 85 83 93 • contact@reversoproject.com
        </Text>
        </Box>
        <Box>
          <Text
            color='white'
            fontSize='16px'
            fontWeight='600'
          ><FormattedMessage id='financial.partners' />&nbsp;:
          </Text>
          <Text
            color='gray.50'
            fontSize='14px'
          >
            Région Occitanie • Banque populaire • BPI France • Créalia
          </Text>
        </Box>
        <Box>
          <Link as={GatsbyLink} to='/'><FormattedMessage id='legal.mentions' /></Link>
        </Box>
      </Stack>
    </Grid>
  </Flex>

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
