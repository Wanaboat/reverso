import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Breadcrumbs'
import Img from 'gatsby-image'
import {
    Box,
    Button,
    Flex,
    Heading,
    Grid,
    Icon,
    Image,
    List,
    ListItem,
    AspectRatioBox,
    Stack,
    Text,
    SimpleGrid,
    PseudoBox
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

import ReversoVideo from '../videos/montage.mp4'
// import logoAudiAwards from '../images/logo-audi-awards.svg'

const ProductTpl = (props) => {

    console.log('propsData', props.data)

    const { data } = props.data.prismicProduct


    return (
        <Layout lang={props.pageContext.lang}>

            <Box
                bg='white'
            >
                <Box
                    background={`url(${shapeGray}) no-repeat left top`}
                    position='relative'
                >
                    {/* <Breadcrumbs
                        node={props.data.prismicProduct}
                        lang={props.pageContext.lang}
                    /> */}
                    <PseudoBox
                        position='absolute'
                        top='300px'
                        left='0'
                        p='1rem'
                        bg='gray.400'
                        cursor='pointer'
                        transition='background 300ms ease'
                        _hover={{
                            bg: 'brand.3',
                            color: 'white'
                        }}
                    >
                        <Icon size='30px' name='arrow-back' />
                    </PseudoBox>
                    <Box
                        position='absolute'
                        top='300px'
                        right='0'
                        p='1rem'
                        bg='gray.400'
                    >
                        <Button
                            size='sm'
                        >
                            Reverso Match
                        </Button>
                    </Box>
                    <Wrapper>
                        <Box
                            py='2rem'
                        >
                            Breadcrumbs
                        </Box>
                        <Grid
                            templateColumns='1fr 1fr'
                            gap='3rem'
                            mb='3rem'
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
                                        {data.args_list.map(arg =>
                                            <ListItem>
                                                {arg.item}
                                            </ListItem>

                                        )}
                                    </List>
                                </Box>
                                <Stack
                                    isInline
                                    spacing='1rem'
                                    shouldWrapChildren={true}
                                >
                                    <BtnPrimary>Pricing and boat configuration</BtnPrimary>
                                    <BtnSecondary>Order now</BtnSecondary>
                                </Stack>

                            </Stack>
                            <Box
                                // bg='gray.50'
                            >
                                <Img
                                    // fixed={
                                    //     props.image2.localFile.childImageSharp.fixed
                                    // }
                                    fixed={
                                        data.image_main.localFile.childImageSharp.fixed
                                    }
                                />
                            </Box>
                        </Grid>

                        <Grid templateColumns='1fr 1fr' gap='2rem'>
                            <Box>
                                <Heading
                                    fontWeight='900'
                                >
                                    Awards
                                </Heading>
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

                            <Box>
                                <Heading
                                    fontWeight='900'
                                >
                                    Versions
                            </Heading>

                                <Stack
                                    spacing='1rem'
                                    my='2rem'
                                    isInline
                                >
                                    <PseudoBox
                                        display='grid'
                                        gridTemplateColumns='50px 1fr'
                                        cursor='pointer'
                                        gridGap='.5rem'
                                        p='.5rem'
                                        bg='white'
                                        border='solid 1px'
                                        borderColor='gray.300'
                                        borderRadius='2px'
                                        _hover={{
                                            bg:'gray.300',
                                            borderColor:'gray.300'
                                        }}
                                    >
                                        <Box>
                                            <Image w='50px' src={Reverso1} />
                                        </Box>
                                        <Flex
                                            pr='2rem'
                                            alignItems='center'>
                                            <Text>Reverso Air</Text>
                                        </Flex>
                                    </PseudoBox>
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
                                            <Image w='50px' src={Reverso2} />
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
                                            <Image w='50px' src={Reverso3} />
                                        </Box>
                                        <Flex
                                            pr='2rem'
                                            alignItems='center'>
                                            <Text>Reverso Match</Text>
                                        </Flex>
                                    </Grid>
                                </Stack>
                            </Box>
                        </Grid>

                        {/* <SimpleGrid
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
                        </SimpleGrid> */}




                        <Box
                            mt='2rem'
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
                                { data.second_args_list.map( arg =>
                                    <Stack spacing='1.5rem'>
                                    <Heading
                                        fontWeight='400'
                                        fontFamily='hind'
                                        fontSize='18px'
                                        textTransform='uppercase'
                                    >
                                        { arg.title }
                                    </Heading>
                                    <Text>
                                        { arg.body.text }
                                    </Text>
                                </Stack>
                                )}
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
                            <SimpleGrid columns={{ xs: 1, lg: 3 }} gap='2rem'>
                                {data.gallery_list.map(item =>
                                    <Image
                                        src={item.picture.url}
                                    />
                                )}
                                {/* <Image
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
                                /> */}
                            </SimpleGrid>
                        </Box>

                        <Box>
                            montage
                            <Box
                                maxW="100%"
                                ratio={1}
                            >
                                <video
                                    width="100%"
                                    height="100%"
                                    autoplay
                                    controls
                                    poster={ Reverso1 }
                                >
                                    <source src={data.video.url} controls type="video/mp4" />
                                </video>
                            </Box>
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

export const query = graphql`
query productQuery($prismicId: ID) {
    prismicProduct( prismicId: { eq : $prismicId} ){
        prismicId
        lang
        uid
        data {
        seo_title
        seo_description
        sharing_image {
            localFile {
            childImageSharp {
                fixed(height: 630, width: 1200) {
                src
                }
            }
            }
        }
        image_main {
            localFile {
                childImageSharp {
                    fixed(height: 1000, width: 1000) { srcSet srcWebp aspectRatio base64 height originalName src srcSetWebp tracedSVG width }
                }
            }
        }
        video {
            url
        }
        seo_title
        args_list {
            item
          }
        second_args_list{
            title
            body {
                html
                text
                raw
            }
        }
        gallery_list {
            picture {
            alt
            copyright
            url
            thumbnails
            }
        }
        parent {
            document {
            ... on PrismicPage {
                uid
                data {
                parent {
                    document {
                    ... on PrismicPage {
                        uid
                        data {
                        parent {
                            document {
                            ... on PrismicPage {
                                uid
                            }
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
}
`