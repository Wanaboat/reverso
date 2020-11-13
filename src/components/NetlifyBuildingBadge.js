import React from 'react'
import {
    Image
} from '@chakra-ui/core'
const NetlifyBuildingBadge = (props) =>{
    return(
        <Image
            src={'https://api.netlify.com/api/v1/badges/b05e589d-b055-45e3-ab75-21a4514f8fde/deploy-status'}
            alt='Build status'
        />
    )
}

export default NetlifyBuildingBadge