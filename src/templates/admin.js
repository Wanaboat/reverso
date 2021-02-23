import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import NetlifyBuildingBadge from '../components/NetlifyBuildingBadge'
import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/core'
// import { getAllContacts } from '../api';

const AdminTpl = (props) => {
    const [contacts, setContacts] = useState(false)
    const [buildTriggerResponse, setBuildTriggerResponse] = useState(false)

    const triggerBuild = () => {
        console.log('triggerBuild')
        axios.post(`https://api.netlify.com/build_hooks/5fac0b9995d1291a29a60ee2`)
            .then(function(response){
                alert('Build just triggered, new version live in 1 minute.')
                console.log( response )
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                setBuildTriggerResponse( time )
            });
    }
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
                            <NetlifyBuildingBadge
                                key={ buildTriggerResponse }
                            />
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
                                onClick={ ()=>{ triggerBuild() } }
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