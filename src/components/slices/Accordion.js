import React, { useState } from 'react'

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

    console.log('AccordionProps', props )

    const variant = 'dark'
    const [isOpen, setIsOpen] = useState( false )

    const { accordion } = props.data.accordion_link.document.data
    const handleOpen = ( item ) => {
        if( isOpen === item ){
            setIsOpen( false )
        }else{
            setIsOpen( item )
        }
    }

    const Items = () => {

        return (
            accordion.map((item, index) =>
                <Box
                    key={`accordion-item-${index}`}
                    borderBottom={ index !== accordion.length - 1 ? 'solid 1px' : 'none' }
                    borderBottomColor={variant === 'light' ? 'gray.100' : 'gray.600'}
                    p={{ xs: '1rem', lg: '2rem 0' }}
                    // pr={{ xs: '2rem', lg: '4rem' }}
                    position='relative' 
                >
                    <Heading
                        as='p'
                        mb='1rem'
                        fontWeight='900'
                        fontFamily='Roboto'
                        letterSpacing='0.1rem'
                        fontSize={{ xs:'18px', lg:'20px' }}
                        cursor='pointer'
                        pr='1.5rem'
                        onClick={() => { handleOpen( index ) }}
                    >
                        { item.title }
                    </Heading>
                    <Text
                        fontSize='16px'
                    >
                        { item.intro }
                    </Text>
                
                    <Box
                        display={ isOpen === index ? 'block' : 'none' }
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
                        right={{ xs: '0', lg: '0rem' }}
                        top={{ xs: '.5rem', lg: '0rem' }}
                        h='100%'
                        position='absolute'
                        mt={{ xs:'0rem', lg: '2rem' }}
                        alignItems={{ xs: 'flex-start', lg: 'flex-start' }}
                    >
                        <Button
                            variant='shadow'
                            onClick={() => { handleOpen( index ) }}
                            display={{ lg:'block' }}
                        >
                            <Icon
                                name={ isOpen === index ? 'minus' : 'add'}
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
            bg={variant === 'light' ? 'white' : 'black'}
            color={variant === 'light' ? 'gray.700' : 'white'}
            px={{ xs:0, lg:'3rem' }}
            py={{ xs:0, lg:'2rem' }}
            mx={{ xs: '-1rem', lg:0 }}
        >
            <Heading>{ props.data.accordion_title.text }</Heading>
            { <Items />}
        </Wrapper>
    )
}

export default Accordion