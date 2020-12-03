import React from 'react'
import {
    Box,
    Flex,
    Image,
    Text
} from '@chakra-ui/core'

const LogosList = ( props ) => {
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
                    <Box
                        key={ item.logo_item.localFile.childImageSharp.fixed.src }
                        mx='1.5rem'>
                        <Image
                            h={{ xs:'auto', lg:'60px' }}
                            src={ item.logo_item.localFile.childImageSharp.fixed.src }
                            alt={ item.logo_item.alt }
                        />
                    </Box>
                )}
            </Flex>    
        </Box>
    )
}

export default LogosList