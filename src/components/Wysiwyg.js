import React from 'react'
import { Box } from '@chakra-ui/core'
import {Link, RichText, Date} from 'prismic-reactjs';
import { linkResolver } from '../prismic-configuration';

const Wysiwyg = ({content}) => {
    console.log( 'content', content )
    return(
        <Box>
            Wysiwyg
            <div className="content">
                {/* {RichText.render(document.data.title)} */}
                {RichText.render( content, linkResolver )}

            </div>
        </Box>
    )
}

export default Wysiwyg