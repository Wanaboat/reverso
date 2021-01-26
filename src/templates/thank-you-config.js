import React from "react"
import { Link as GatsbyLink } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Box,
  Button,
  Heading,
  Flex,
  Link,
  Text
} from '@chakra-ui/core'

const ConfigThankyouPage = ( props ) => {
    return(
      <Layout>
        <SEO title="Thank you for your configuration" />
        <Flex
          alignItems='center'
          justifyContent='center'
          h='800px'
        >
          { props.pageContext.lang === 'en' ?
          <Box
            textAlign='center'
          >
            <Heading fontSize='16px' mb='1rem' as='h1'>
              Congratulations, your config is complete.
            </Heading>
            <Text>
              You'l receive soon all the details by email. In the mean time, you can find{' '}
              <Link
                as={GatsbyLink}
                to={'/small-sailboats/faq/'}
                color='brand.1'
                textDecoration='underline'
              >a lot of informations about Reverso's boats on the FAQ page</Link>.
            </Text>
            <Button
              mt='.5rem'
              variant='link'
              color='gray.500'
              fontWeight='400'
              to='/'
              as={ GatsbyLink }
            >Go to homepage</Button>
          </Box>
          :
          <Box
            textAlign='center'
          >
            <Heading fontSize='16px' mb='1rem' as='h1'>
              Félicitation, la configuration de votre Reverso est complète.
            </Heading>
            <Text>
              Vous recevrez bientôt plein de détails par email.
            </Text>
            <Button
              mt='.5rem'
              variant='link'
              color='gray.500'
              fontWeight='400'
              to='/'
              as={ GatsbyLink }
            >Aller à la page d'accueil</Button>
          </Box>
          }
    
        </Flex>
      </Layout>
    )
}

export default ConfigThankyouPage