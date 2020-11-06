import React from 'react'
import {
    Box
} from '@chakra-ui/core'
import Wysiwyg from '../../components/Wysiwyg'

const Engine = ({ data }) => {
    console.log( 'EngineData', data )
    const Slices = data.map( slice =>
        slice.__typename === 'PrismicPageBodyWysiwyg' ?
            <Wysiwyg content={ slice.primary.content.raw } />
        : null
        // <Box>SLICE 1</Box>

    )
    return(
        <Box>
            {Slices}
        </Box>
    )
}

export default Engine