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
import heroIllu from '../images/home-hero-1.jpg'
const HomepageHero = () => {
    return (
        <Box>
            <Box
                bg='white'
            >
                <Wrapper
                    pt='5rem'
                >
                    <Grid
                        gap='3rem'
                        templateColumns={{ xs: '100%', lg: '50% 50%' }}
                    >
                        <Stack
                            spacing='1.5rem'
                        >
                            <Text
                                fontSize='24px'
                                fontWeight='700'
                            >Sailing is cool, owning a boat is complicated.</Text>
                            <Text
                                as='span'
                                fontSize='36px'
                                fontWeight='700'
                            >
                                → We invented Reverso, the{' '}
                                <Heading
                                    as='h1'
                                    display='inline'
                                    fontSize='36px'
                                >
                                    sailing dinghy that folds up
                        </Heading>{' '}
                     in 3 minutes
                    </Text>
                            <List
                                fontSize='18px'
                            >
                                <ListItem
                                    _before={{
                                        display:'block',
                                        content:'-'
                                    }}
                                >no trailer / no marina / no garage</ListItem>
                                <ListItem>low commitment</ListItem>
                                <ListItem>cost effective</ListItem>
                            </List>
                        </Stack>
                        <Box>
                            <Flex
                                alignItems='center'
                                justify='center'
                                h='500px'
                                // bg='gray.50'
                            >
                                <Image
                                    src={ heroIllu }
                                    w='500px'
                                    h='auto'
                                />
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
                                <Box as='picture'>
                                    <Image
                                        mt='-5rem'
                                        src='https://static.actu.fr/uploads/2019/05/DJI_0065-copie2-960x640.jpg'
                                    />
                                    <Text as="figcaption">Légende de l'image</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Stack p='2rem'>
                                <Heading as='p'>
                                    Does it work for :
                                </Heading>
                                <Stack
                                    spacing='1rem'
                                >
                                    <Text
                                        textTransform='uppercase'
                                        fontWeight='600'
                                    >
                                        → sailing solo ?
                                    </Text>
                                    <Text>
                                        Yes ! the largest section only weights 39 pounds, the boat is super easy to rig and can be sailed by a single person.
                                    </Text>
                                    <Text
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
                                    </Text>
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