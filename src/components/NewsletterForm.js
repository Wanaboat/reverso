import React, { useState, useEffect } from 'react'
// import { createContactItem } from '../api';
import jsonp from 'jsonp';
import { Box, Button, Input, Grid, Text } from '@chakra-ui/core'
import {
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/core"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FormattedMessage, useIntl } from 'react-intl'

const NewsletterForm = () => {


    const locale = useIntl()['locale']
    // console.log('locale', locale)

    const [isSaved, setIsSaved] = useState(false)

    const InputField = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", InputField.current.value)
        // createContactItem(InputField.current.value).then(res => {
        //     console.log('Expense details added to the database');
        //     setIsSaved(true)
        // });

        let mcUrl = ''

        if (locale === 'en') {
            mcUrl = `${process.env.GATSBY_MAILCHIMP_EN_AUDIENCE}&EMAIL=${InputField.current.value}&c=__jp0`
        } else {
            mcUrl = `${process.env.GATSBY_MAILCHIMP_FR_AUDIENCE}&EMAIL=${InputField.current.value}&c=__jp0`
        }

        console.log('mcUrl', mcUrl)

        new Promise((resolve, reject) =>
            jsonp(mcUrl, { param: 'c' }, (err, data) => {
                if (err) reject(err);
                if (data) resolve(data);
            }),
        );
    }

    return (
        <Box
            color='gray.900'
            as='form'
            px={{ lg: '4rem' }}
            pt={{ xs: '2rem', lg: '0' }}
            onSubmit={(e) => { handleSubmit(e) }}
        >
            { !isSaved ?
                <FormControl>
                    <FormLabel
                        htmlFor="email"
                        color='white'
                    >
                        <FormattedMessage id='newsletter.subscribe' />&nbsp;:
                </FormLabel>
                    <Grid
                        templateColumns='1fr 60px'
                    >
                        <Input
                            ref={InputField}
                            type="email"
                            id="email"
                            aria-describedby="email-helper-text"
                            borderRadius='3px 0 0 3px'
                            h='50px'
                            placeholder='Email'

                        />
                        <Button
                            bg='brand.1'
                            color='white'
                            borderRadius='0 3px 3px 0'
                            h='50px'
                            type='submit'
                            _hover={{
                                bg: 'blue.700'
                            }}
                        >
                            Ok
                        </Button>
                    </Grid>
                    <FormHelperText
                        color='gray.50'
                        id="email-helper-text">
                        <FormattedMessage id='newsletter.subscribe.notice1' />
                    </FormHelperText>
                </FormControl>
                :
                <Text
                    py='2rem'
                    color='white'
                >
                    <FormattedMessage id='newsletter.subscribe.notice2' />
                </Text>
            }
        </Box>
    )
}

export default NewsletterForm

// Request URL: https://reversoproject.us20.list-manage.com/subscribe/post-json?u=65ccd57c038bb3835dd846686&amp;id=dfca43e39a&EMAIL=oli.livet%40gmail.com&c=__jp0
// Request Method: GET
// Status Code: 200 
// Remote Address: 104.85.43.196:443
// Referrer Policy: strict-origin-when-cross-origin


// u: 65ccd57c038bb3835dd846686
// amp;id: dfca43e39a
// EMAIL: oli.livet@gmail.com
// c: __jp0