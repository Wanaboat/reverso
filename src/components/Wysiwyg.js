import React from 'react'
import { Box } from '@chakra-ui/core'
import {Link, RichText, Date} from 'prismic-reactjs';
import { linkResolver } from '../prismic-configuration';
import '../css/wysiwyg.css'

const Wysiwyg = ({data}) => {
    console.log( 'Wysiwyg', data )
    return(

        <Box className="wysiwyg">
            {/* {RichText.render(document.data.title)} */}
            {RichText.render( data, linkResolver )}

        </Box>
    )
}

export default Wysiwyg