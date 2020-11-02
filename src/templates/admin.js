import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/core'
import { getAllContacts } from '../api';

const AdminTpl = (props) => {
    const [contacts, setContacts] = useState(false)

    useEffect(() => {
        getAllContacts.then(res => {
            setContacts(res);
            console.log(res);
        });
    }, []);
    return (
        <Layout lang={props.pageContext.lang}>
            <Box
                p='2rem'
                maxW='800px'
                bg='white'
                minH='100vh'
            >
                <Stack spacing="3rem">
                    <Flex>
                        <Heading>Site Admin</Heading>
                        <Flex
                            ml='2rem'
                            alignItems='center'>
                                <Image src={'https://api.netlify.com/api/v1/badges/52897bdc-a9e6-4fa8-a78d-e3454a01e3be/deploy-status'}
                                    alt='Build status' />
                            </Flex>
                    </Flex>
                    <Box>
                        <Heading
                            fontSize='20px'
                        >Tools access</Heading>
                        <Stack isInline spacing='2rem'>

                            <Button
                                as='a'
                                href='https://reverso.prismic.io'
                                target="_blank"
                            >
                                Prismic access
                            </Button>
                            <Button
                                as='a'
                                href='https://reverso.prismic.io'
                                target="_blank"
                            >
                                Analytics view
                            </Button>
                            <Button
                                as='a'
                                href='https://reverso.prismic.io'
                                target="_blank"
                            >
                                Netlify Build Trigger
                        </Button>
                        </Stack>
                    </Box>
                    {contacts ?
                        <Box>
                            <Heading
                                fontSize='20px'
                            >Newsletter subscribers</Heading>

                            {contacts.map(contact =>
                                <Flex justify='space-between'>
                                    <Text w='33%'>
                                        {contact.data.name}
                                    </Text>
                                    <Text w='33%'>
                                        {contact.data.lang} fr
                                    </Text>
                                    <Text w='33%'>
                                        {contact.data.email}
                                    </Text>
                                </Flex>
                            )}
                        </Box>
                        : null}
                </Stack>
            </Box>
        </Layout>
    )
}

export default AdminTpl