import React, { useState, useEffect } from 'react'
import { createContactItem } from '../api';

import { Box, Button, Input, Grid, Text } from '@chakra-ui/core'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/core"

const NewsletterForm = () => {

    const [ isSaved, setIsSaved ] = useState( false )

    const InputField = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( "submit", InputField.current.value )
        createContactItem(InputField.current.value).then(res => {
            console.log('Expense details added to the database');
            setIsSaved( true )
          });
    }

    return (
        <Box
            color='gray.900'
            as='form'
            onSubmit={(e) => { handleSubmit(e) }}
        >
            { !isSaved ? 
            <FormControl>
                {/* <FormLabel htmlFor="email">Email address</FormLabel> */}
                <Grid
                    templateColumns='1fr 60px'
                    maxW='400px'
                    mx='auto'
                >
                <Input
                    ref={ InputField }
                    type="email"
                    id="email"
                    aria-describedby="email-helper-text"
                    borderRadius='3px 0 0 3px'
                    h='50px'
                    placeholder='Your email'

                />
                <Button
                    bg='brand.primary'
                    color='white'
                    borderRadius='0 3px 3px 0'
                    h='50px'
                >
                    Ok
                </Button>
                </Grid>
                
                <FormHelperText
                    textAlign='center'
                    id="email-helper-text">
                    Data storage is 100% secure, unsubscribe is easy.
                </FormHelperText>
            </FormControl>
            : 
            <Text
                py='2rem'
                color='white'
                textAlign='center'
            >You're subscription has been successfuly recorded. You'll receive our first newslette soon.</Text>
            }
        </Box>
    )
}

export default NewsletterForm