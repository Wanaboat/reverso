import React from 'react'
import {
    Box,
    Flex,
    Image,
    Text
} from '@chakra-ui/core'

const LogosList = ( props ) => {
    console.log( 'logosList', props )
    return(
        <Box
            py='2rem'
        >
            <Text
                fontSize='16px'
                fontWeight='500'
                textAlign='center'
                color='gray.500'
                mb='1rem'
            >
                { props.data.logo_list_title}
            </Text>
            <Flex
                justifyContent='center'
            >
                { props.items.map( item =>
                    <Box mx='1rem'>
                        <Image
                            src={ item.logo_item.localFile.childImageSharp.fixed.src }
                        />
                    </Box>
                )}
            </Flex>    
        </Box>
    )
}

export default LogosList


