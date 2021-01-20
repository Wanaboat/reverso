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

const ConfigThankyouPage = () => {
    return(
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
            <Heading fontSize='16px' mb='1rem' as='h1'>Congratulations, your config is complete.</Heading>
            <p>You'l receive soon all the details by email.</p>
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
}

export default ConfigThankyouPage