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

const Faq = () => {

    const [ openItem, setOpenItem ] = useState( false )

    const Items = () => {
        return(
            
        [1,2,3,4].map( (item,index) =>
            <Box
                borderBottom='solid 1px'
                borderBottomColor='gray.600'
                p={{ xs:'1rem 2rem', lg:'2rem 4rem'}}
                pr={{ xs:'2rem', lg:'8rem'}}
                position='relative'
            >
                <Heading
                    as='p'
                    textTransform='uppercase'
                    fontSize='20px'
                    mb='1rem'
                >
                    Title of the block
                </Heading>
                <Text
                    fontSize='14px'
                >
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Text>
                <Text
                    mt='2rem'
                    display={ index === openItem ? 'block' : 'none'}
                >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                </Text>
                <Flex
                    right={{ xs:'0', lg:'2rem' }}
                    top={{ xs:'.5rem', lg:'0rem' }}
                    h='100%'
                    position='absolute'
                    alignItems={{ xs:'flex-start', lg:'center'}}
                >
                    <Button
                        variant='shadow'
                        onClick={ ()=> {
                            setOpenItem( index === openItem ? null : index )
                        }}
                    >
                        <Icon
                            name={  index === openItem ? 'minus' : 'add' }
                        />
                    </Button>
                </Flex>
            </Box>

        )
        )
    }
    return(
        <Wrapper
            bg='brand.3'
            color='white'
            py='2rem'
        >
            { <Items /> }
        </Wrapper>
    )   
}

export default Faq