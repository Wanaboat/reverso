import React, { useState, useEffect } from 'react'
import { createContactItem } from '../api';

import { Box, Input } from '@chakra-ui/core'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/core"

const NewsletterForm = () => {

    const InputField = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( "submit", InputField.current.value )
        createContactItem(InputField.current.value).then(res => {
            console.log('Expense details added to the database');
          });
    }

    return (
        <Box
            color='gray.900'
            as='form'
            onSubmit={(e) => { handleSubmit(e) }}
        >

            <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input ref={ InputField } type="email" id="email" aria-describedby="email-helper-text" />
                <FormHelperText id="email-helper-text">
                    We'll never share your email.
                </FormHelperText>
            </FormControl>

        </Box>
    )
}

export default NewsletterForm