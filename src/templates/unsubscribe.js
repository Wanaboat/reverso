import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import withLocation from '../utils/withLocation'
import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/core'
import { getAllContacts } from '../api';

const UnsubscribeTpl = (props) => {
    console.log( 'props', props )
    const [contacts, setContacts] = useState(false)
    console.log( props )
    useEffect(() => {
        getAllContacts.then(res => {
            setContacts(res);
            console.log(res);
        });
    }, []);
    return (
        <Layout lang={props.pageContext.lang}>
            Unsubscribe
        </Layout>
    )
}

export default  UnsubscribeTpl 