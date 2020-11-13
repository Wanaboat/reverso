import React, { useEffect, useState } from 'react'

import {
    Box,
    Button,
    Icon,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/core'

import Wrapper from '../components/Wrapper'

const SimpleFaq = ({ variant }) => {

    const [ openItem, setOpenItem ] = useState( false )

    const Items = () => {
        return(
            
        [1,2,3,4].map( (item,index) =>
            <Box
                key={`simpleFaq-${index}`}
                borderBottom='solid 1px'
                borderBottomColor={ variant === 'light' ? 'gray.100' : 'gray.600' }
                p={{
                    xs:'1rem 0rem',
                    lg:'2rem 0rem'
                }}
                position='relative'
            >
                <Text
                    fontSize='16px'
                    fontStyle='italic'
                >
                Question courte, it is a long established fact that a reader will be distracted.
                </Text>
                <Text
                    mt='1rem'
                >
                    Réponse moyenne. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Text>
            </Box>
        )
        )
    }
    return(
        <Wrapper
            bg={ variant === 'light' ? 'white' : 'brand.3' }
            color={ variant === 'light' ? 'gray.700' : 'white' }
            py='1rem'
        >
            { <Items /> }
        </Wrapper>
    )   
}

export default SimpleFaq