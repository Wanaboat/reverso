import React from 'react';
import Script from "react-inline-script"
import Helmet from 'react-helmet'
import { Box, Button } from '@chakra-ui/core'
import { FormattedMessage } from 'react-intl'

const TypeFormConfigButton = () => {

    return( <>
        <Button
            as='a'
            display='block'
            className="typeform-share button"
            href="https://form.typeform.com/to/BC6lkfG6?typeform-medium=embed-snippet"
            data-mode="drawer_right"
            target="_blank"

            cursor='pointer'
            bg='brand.1'
            color='white'
            p='.7rem 1rem .7rem 1rem'
            border='solid 1px'
            borderColor='brand.1'
            textTransform='uppercase'
            fontWeight='normal'
            fontFamily='Futura PT'
            letterSpacing='0.05rem'
            whiteSpace='pre'
            _hover={{
                bg:'blue.700'
            }}
            _active={{
                bg:'blue.500'
            }}
        >
            <FormattedMessage id="pricing.and.boat.configuration" />
        </Button>
        <Helmet><script src='https://embed.typeform.com/embed.js' /></Helmet>

    </>);
  }

export default TypeFormConfigButton
