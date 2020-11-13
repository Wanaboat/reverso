
import React, { useEffect, useState } from 'react'

import {
    Box,
    Button,
    Icon,
    Image,
    Flex,
    Heading,
    Text,
    SimpleGrid,
} from '@chakra-ui/core'

import Wysiwyg from '../Wysiwyg'

import Wrapper from '../../components/Wrapper'

const Accordion = (props) => {

    const [openItem, setOpenItem] = useState(false)
    const variant = 'dark'

    const { accordion } = props.data.accordion_link.document.data
    console.log('AccordionProps', accordion)


    const Items = () => {
        return (
            accordion.map((item, index) =>
                <Box
                    key={`accordion-item-${index}`}
                    borderBottom={ index !== accordion.length - 1 ? 'solid 1px' : 'none' }
                    borderBottomColor={variant === 'light' ? 'gray.100' : 'gray.600'}
                    p={{ xs: '1rem 3rem', lg: '2rem 0' }}
                    // pr={{ xs: '2rem', lg: '4rem' }}
                    position='relative' 
                >
                    <Heading
                        as='p'
                        textTransform='uppercase'
                        fontSize='20px'
                        mb='1rem'
                        fontWeight='900'
                        fontFamily='Roboto'
                        letterSpacing='0.1rem'
                        fontSize='32px'
                    >
                        { item.title }
                </Heading>
                    <Text
                        fontSize='14px'
                    >
                        { item.intro }
                </Text>
                    <Box
                        display={index === openItem ? 'block' : 'none'}
                    >
                        <SimpleGrid my='2rem' gap='2rem' columns={{ xs:1, lg:2 }}>
                            <Box>
                                <Image
                                    src={ item.image.url }
                                    alt={'test'}
                                />
                            </Box>
                            <Box>
                                <Wysiwyg data={ item.content.raw } />
                            </Box>
                        </SimpleGrid>
                    </Box>

                    <Flex
                        right={{ xs: '0', lg: '2rem' }}
                        top={{ xs: '.5rem', lg: '0rem' }}
                        h='100%'
                        position='absolute'
                        mt='2rem'
                        alignItems={{ xs: 'flex-start', lg: 'flex-start' }}
                    >
                        <Button
                            variant='shadow'
                            onClick={() => {
                                setOpenItem(index === openItem ? null : index)
                            }}
                        >
                            <Icon
                                name={index === openItem ? 'minus' : 'add'}
                                transition='all 200ms ease'
                            // transform={ index === openItem  ? 'rotate(45deg)' : 'rotate(90deg)'}
                            />
                        </Button>
                    </Flex>
                </Box>
            )
        )
    }
    return (
        <Wrapper
            bg={variant === 'light' ? 'white' : 'brand.3'}
            color={variant === 'light' ? 'gray.700' : 'white'}
            // p='1rem'
            px='2rem'
        >
            { <Items />}
        </Wrapper>
    )
}

export default Accordion