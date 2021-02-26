import React from 'react'
import {
    Box,
    Flex,
    Image,
    Text
} from '@chakra-ui/core'

const LogosList = ( props ) => {
    // console.log('LogosList', props)
    return(
        <Box
            py={{ xs:'2rem', lg:'4rem' }}
            bg={ props.data.bg_color === 'dark' ? 'gray.900' : 'white' }
        >
            { props.data.logo_list_title ?
                <Text
                    fontSize='16px'
                    fontWeight='500'
                    textAlign='center'
                    color= { props.data.bg_color === 'dark' ? 'white' : 'gray.900' }
                    mb={{ xs:'1rem', lg:'2rem' }}
                >
                    { props.data.logo_list_title}
                </Text>
            : null }
            <Flex
                justifyContent='center'
                wrap='wrap'
            >
                { props.items.map( item =>
                    <Box
                        key={ item.logo_item.localFile ? item.logo_item.localFile.childImageSharp.fixed.src : null }
                        mx='1.5rem'
                        my={{ xs:1, lg:2}}
                    >
                        <Image
                            h={{ xs:'auto', lg:'60px' }}
                            src={ item.logo_item.localFile ?item.logo_item.localFile.childImageSharp.fixed.src : null }
                            alt={ item.logo_item.alt }
                        />
                    </Box>
                )}
            </Flex>    
        </Box>
    )
}

export default LogosList