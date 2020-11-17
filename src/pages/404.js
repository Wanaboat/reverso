import React from "react"
import { Link as GatsbyLink } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Box,
  Button,
  Heading,
  Flex
} from '@chakra-ui/core'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex
      alignItems='center'
      justifyContent='center'
      h='800px'
    >
      <Box
        textAlign='center'
      >
        <Heading fontSize='16px' mb='1rem' as='h1'>404: Not Found</Heading>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Button
          mt='.5rem'
          variant='link'
          color='gray.500'
          fontWeight='400'
          to='/'
          as={ GatsbyLink }
        >Go to homepage</Button>
      </Box>

    </Flex>
  </Layout>
)

export default NotFoundPage
