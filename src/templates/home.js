import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

import {
    Box,
    Flex,
    Heading
} from '@chakra-ui/core'

import NewsletterForm from '../components/NewsletterForm'
import { getAllContacts } from '../api';


const HomeTpl = (props) => {
    const [ contacts, setContacts ] = useState( false )
    useEffect(() => {
        getAllContacts.then(res => {
            setContacts(res);
          console.log(res);
        });
      }, []);

    return (
        <Layout lang={ props.pageContext.lang}>
            <Flex
                minH='100vh'
                w='100%'
                justifyContent='center'
                alignItems='center'
            >
                <Box>
                    <Heading
                        textTransform='uppercase'
                        color='gray.300'
                    >
                        Homepage
                    </Heading>
                    <Box
                    
                    >
                        Content
                    </Box>
                    <NewsletterForm />
                </Box>
            </Flex>
        </Layout>
    )
}

export default HomeTpl