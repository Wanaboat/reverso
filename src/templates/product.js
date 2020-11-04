import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

import {
    Box,
    Flex,
    Heading,
    Grid,
    Image,
    List,
    ListItem,
    Stack,
    Text,
    SimpleGrid
} from '@chakra-ui/core'

import shapeGray from '../images/shape-triangle.svg'
import logoReversoAir from '../images/logo-reverso-air.svg'
import Wrapper from '../components/Wrapper'

import logoBoatOfTheYear from '../images/logo-boat-of-year.svg'

import Faq from '../components/Faq'
import Carousel from '../components/Carousel'

import BtnPrimary from '../components/Buttons/primary'
import BtnSecondary from '../components/Buttons/secondary'

import Reverso1 from '../images/reverso-blue.png'
import Reverso2 from '../images/reverso-red.png'
import Reverso3 from '../images/reverso-match.png'
// import logoAudiAwards from '../images/logo-audi-awards.svg'

const ProductTpl = (props) => {


    return (
        <Layout lang={props.pageContext.lang}>

            <Box
                bg='white'
            >
                <Box
                    background={`url(${shapeGray}) no-repeat left top`}
                    h='3000px'
                >
                    <Wrapper>
                        <Box
                            py='2rem'
                        >
                            Breadcrumbs
                        </Box>
                        <Grid
                            templateColumns='1fr 600px'
                            gap='3rem'
                        >
                            <Stack spacing='1.5rem'>
                                <Box>
                                    <Image src={logoReversoAir} />
                                </Box>
                                <Box>
                                    <Text>
                                        Revereso Air : the small sailboat that changed the game of dinghy sailing. Our best seller small sailboat, ready for the adventure, standard with all premium equipment.
                                    </Text>
                                </Box>
                                <Box>
                                    <List
                                        spacing='1rem'
                                        listStyleType='circle'
                                    >
                                        <ListItem>
                                            Folding hull
                                        </ListItem>
                                        <ListItem>
                                            Black Membrane sail
                                        </ListItem>
                                        <ListItem>
                                            Full carbon mast drill-less
                                        </ListItem>
                                        <ListItem>
                                            Built with care in our french factory (Brittany)
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box>
                                    <Stack
                                        py='1.5rem'
                                        isInline
                                        spacing='2rem'
                                        borderBottom='solid 1px'
                                        borderBottomColor='gray.300'
                                    >
                                        <Image src={logoBoatOfTheYear} />
                                        {/* <Image src={ logoAudiAwards } /> */}
                                    </Stack>
                                </Box>
                            </Stack>
                            <Box
                                bg='gray.50'
                            >
                                Right side
                            </Box>
                        </Grid>

                        <SimpleGrid
                            columns='2'
                            gap='2rem'
                            my='2rem'
                        >
                            <Box>
                                <Image
                                    // src={}
                                    src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w'
                                />
                            </Box>
                            <Box>
                                <Image
                                    // src={}
                                    src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w'
                                />
                            </Box>
                        </SimpleGrid>
                        <Stack
                            isInline
                            spacing='2rem'
                            shouldWrapChildren={true}
                        >
                            <BtnSecondary>Pricing and boat configuration</BtnSecondary>
                            <BtnSecondary>Order now</BtnSecondary>
                        </Stack>

                        <Stack
                            spacing='1rem'
                            my='2rem'
                            isInline
                        >
                            <Grid
                                templateColumns='50px 1fr'
                                gap='.5rem'
                                p='.5rem'
                                bg='white'
                                border='solid 1px'
                                borderColor='gray.300'
                                borderRadius='2px'
                            >
                                <Box>
                                    <Image w='50px' src={ Reverso1 } />
                                </Box>
                                <Flex
                                    pr='2rem'
                                    alignItems='center'>
                                    <Text>Reverso Air</Text>
                                </Flex>
                            </Grid>
                            <Grid
                                templateColumns='50px 1fr'
                                gap='.5rem'
                                p='.5rem'
                                bg='white'
                                border='solid 1px'
                                borderColor='gray.300'
                                borderRadius='2px'
                            >
                                <Box>
                                    <Image w='50px' src={ Reverso2 } />
                                </Box>
                                <Flex
                                    pr='2rem'
                                    alignItems='center'>
                                    <Text>Reverso Rouge</Text>
                                </Flex>
                            </Grid>
                            <Grid
                                templateColumns='50px 1fr'
                                gap='.5rem'
                                p='.5rem'
                                bg='white'
                                border='solid 1px'
                                borderColor='gray.300'
                                borderRadius='2px'
                            >
                                <Box>
                                    <Image w='50px' src={ Reverso3 } />
                                </Box>
                                <Flex
                                    pr='2rem'
                                    alignItems='center'>
                                    <Text>Reverso Match</Text>
                                </Flex>
                            </Grid>
                        </Stack>


                        <Box
                            mt='5rem'
                        >
                            <Heading
                                fontWeight='900'
                            >
                                Program
                            </Heading>
                            <SimpleGrid
                                columns='3'
                                gap='4rem'
                                mt='2rem'
                            >
                                <Stack spacing='1.5rem'>
                                    <Heading
                                        fontWeight='400'
                                        fontFamily='hind'
                                        fontSize='18px'
                                        textTransform='uppercase'
                                    >
                                        Easy sailing
                                    </Heading>
                                    <Text>
                                        Our best seller small sailboat, ready for the adventure with all premium equipment kids, 2 crew, learn to sail
                                    </Text>
                                </Stack>
                                <Stack spacing='1.5rem'>
                                    <Heading
                                        fontWeight='400'
                                        fontFamily='hind'
                                        fontSize='18px'
                                        textTransform='uppercase'
                                    >
                                        Performance sailing
                                    </Heading>
                                    <Text>
                                    Our best seller small sailboat, ready for the adventure with all premium equipment speed, ride at 16 kts, surf.
                                    </Text>
                                </Stack>
                            </SimpleGrid>
                        </Box>

                        <Box>
                            <Heading
                                fontWeight='900'
                            >
                                Typeform
                            </Heading>
                        </Box>


                        <Box>
                            <Heading
                                fontWeight='900'
                            >
                                Gallery
                            </Heading>
                            <SimpleGrid columns={{ xs:1, lg:3}} gap='2rem'>
                                <Image
                                    src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w'
                                />
                                <Image
                                    src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w'
                                />
                                                                <Image
                                    src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w'
                                />
                                                                <Image
                                    src='https://images.squarespace-cdn.com/content/v1/5eadcd40acf99d220aee75a5/1601355291427-J3U25X12SK6LBCNH3LRF/ke17ZwdGBToddI8pDm48kO4MCmFXgria781RdOOdXR4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczuNowp6jCWKg3HkDw9htMNjCCTfYrb_QE008VnYI4AiFeFFp_0SMpnEH4sQNbkF4/photoshop-lagon-drone+2.jpeg?format=1000w'
                                />
                            </SimpleGrid>
                        </Box>
                        </Wrapper>

                        <Carousel />
                        <Faq />

                </Box>
            </Box>

        </Layout>
    )
}

export default ProductTpl