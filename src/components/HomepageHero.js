import React, { useState, useEffect } from 'react'
import { createContactItem } from '../api';
import Wrapper from '../components/Wrapper'
import {
    Box,
    Heading,
    Grid,
    Flex,
    Image,
    List,
    ListItem,
    Stack,
    Text,

} from '@chakra-ui/core'
import BtnPrimary from '../components/Buttons/primary'
import Img from "gatsby-image"

const HomepageHero = (props) => {
    console.log('HeroProps', props)
    const { data } = props
    return (
        <Box>
            <Box
                bg='white'
            >
                <Wrapper
                    pt={{ xs: '0', lg: '5rem' }}
                >
                    <Grid
                        gap={{ xs: '2rem', lg: '3rem' }}
                        templateColumns={{ xs: '100%', lg: '50% 50%' }}
                        pb='7rem'
                    >
                        <Stack
                            spacing='1.5rem'
                            order={{ xs: '2', lg: '1' }}
                        >
                            <Text
                                fontSize='24px'
                                fontWeight='900'
                                fontFamily='Roboto'
                            >
                                {data.intro_title}
                            </Text>
                            <Text
                                as='span'
                                fontSize='36px'
                                fontWeight='900'
                                fontFamily='Roboto'
                            >
                                {data.title_prefix}
                                {/* → We invented Reverso, the{' '} */}
                                <Heading
                                    as='h1'
                                    display='inline'
                                    fontSize='36px'
                                    fontWeight='900'
                                >
                                    {data.title}
                                </Heading>{' '}
                                {data.title_suffix}

                            </Text>
                            <List
                                fontSize='18px'
                            >
                                {data.args_list.map(list =>
                                    <ListItem>{list.item}</ListItem>
                                )}
                            </List>
                        </Stack>
                        <Box
                            order={{ xs: '1', lg: '2' }}
                        >
                            <Flex
                                alignItems='center'
                                justify='center'
                                // h='500px'
                            // bg='gray.50'
                            >
                                <Img
                                    // fixed={
                                    //     props.image1.localFile.childImageSharp.fixed
                                    // }
                                    fluid={
                                        props.image1.localFile.childImageSharp.fluid
                                    }
                                />
                                {/* <Image
                                    src={data.hero_image_1.url}
                                    w='500px'
                                    h='auto'
                                /> */}
                            </Flex>
                        </Box>
                    </Grid>
                </Wrapper>
                <Wrapper
                    bg='brand.4'
                >
                    <Grid
                        gap='3rem'
                        templateColumns={{ xs: '100%', lg: '50% 50%' }}
                    >
                        <Box>
                            <Box
                                as='figure'
                            >
                                <Box
                                    as='picture'
                                    transform='translateY( -7rem )'
                                    display='block'
                                >
                                    {/* <Image
                                        mt='-5rem'
                                        src={data.hero_image_2.url}
                                    /> */}
                                    <Img
                                    // fixed={
                                    //     props.image2.localFile.childImageSharp.fixed
                                    // }
                                    fluid={
                                        props.image2.localFile.childImageSharp.fluid
                                    }
                                />
                                    <Text as="figcaption">Légende de l'image</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Stack
                                p={{ lg:'2rem' }}
                            >
                                <Heading
                                    as='p'
                                    fontSize='24px'
                                    mb='1rem'
                                >
                                    {data.secondary_title[0].text}
                                </Heading>
                                <Stack
                                    spacing='1rem'
                                >
                                    <List>
                                        {data.second_args_list.map(list =>
                                            <ListItem>
                                                <Text
                                                    textTransform='uppercase'
                                                    fontWeight='600'
                                                >
                                                    {list.question}
                                                </Text>
                                                <Text>
                                                    {list.answer}
                                                </Text>
                                            </ListItem>
                                        )}
                                    </List>
                                    {/* <Text
                                        textTransform='uppercase'
                                        fontWeight='600'
                                    >
                                        → sailing with kids ?
                                    </Text>
                                    <Text>
                                        Kids love the Reverso since they feel protected in the large and safe cockpit. They’ll be able to helm
                                    </Text>
                                    <Text
                                        textTransform='uppercase'
                                        fontWeight='600'
                                    >
                                        → sailing with 2 crew ?
                                    </Text>
                                    <Text>
                                        Of course ! Besides being super easy to handle, the Reverso Air took us over 16.2 kts. would you dare trying to smash that record ?
                                    </Text>
                                    <Text
                                        textTransform='uppercase'
                                        fontWeight='600'
                                    >
                                        → performance sailing ?
                                    </Text>
                                    <Text>
                                        Hell yeah ! Besides being super easy to handle, the Reverso Air took us over 16.2 kts. would you dare trying to smash that record ?
                                    </Text>
                                    <Text
                                        textTransform='uppercase'
                                        fontWeight='600'
                                    >
                                        → The trunk of my car ?
                                    </Text> */}
                                </Stack>
                                <Box>
                                    <BtnPrimary>
                                        One boat - multiple purposes
                                    </BtnPrimary>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Wrapper>
            </Box>
        </Box>
    )
}

export default HomepageHero