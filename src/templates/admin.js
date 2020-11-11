import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/core'
// import { getAllContacts } from '../api';

const AdminTpl = (props) => {
    const [contacts, setContacts] = useState(false)

    useEffect(() => {
        // getAllContacts.then(res => {
        //     setContacts(res);
        //     console.log(res);
        // });
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
                                <Image src={'https://api.netlify.com/api/v1/badges/b05e589d-b055-45e3-ab75-21a4514f8fde/deploy-status'}
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
                                href='https://analytics.google.com/analytics/web/#/report-home/a97930234w144058920p148785528'
                                target="_blank"
                            >
                                Analytics view
                            </Button>
                            <Button
                                as='a'
                                href='https://api.netlify.com/build_hooks/5fac0b9995d1291a29a60ee2'
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
                                        {contact.data.lang}
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