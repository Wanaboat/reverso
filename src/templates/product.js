import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Breadcrumbs'
import Img from 'gatsby-image'
import {
    AspectRatioBox,
    Box,
    Button,
    Flex,
    Heading,
    Grid,
    Icon,
    Image,
    List,
    ListItem,
    Stack,
    Text,
    SimpleGrid,
    PseudoBox
} from '@chakra-ui/core'

import shapeGray from '../images/shape-triangle.svg'
import logoReversoAir from '../images/logo-reverso-air.svg'
import Wrapper from '../components/Wrapper'

import logoBoatOfTheYear from '../images/logo-boat-of-year.svg'
import logoAudiAwards from '../images/logo-audi-awards.svg'
import Faq from '../components/Faq'
import Carousel from '../components/Carousel'

import ButtonConfig from '../components/Buttons/config'
import BtnPrimary from '../components/Buttons/primary'
import BtnSecondary from '../components/Buttons/secondary'

import Reverso1 from '../images/reverso-blue.png'
import Reverso2 from '../images/reverso-red.png'
import Reverso3 from '../images/reverso-match.png'

import VideoPlayer from '../components/VideoPlayer'
import Gallery from '../components/Gallery'

import VideoCover from '../images/video-cover.jpg'
import Wysiwyg from '../components/Wysiwyg'
import { FormattedMessage } from 'react-intl'
// import logoAudiAwards from '../images/logo-audi-awards.svg'
import Hierarchy from '../components/hierachyProduct'

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
                    <PseudoBox
                        display={{ xs: 'none', xl: 'block' }}
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
                    <PseudoBox
                        display={{ xs: 'none', xl: 'block' }}
                        position='absolute'
                        top='300px'
                        right='0'
                        p='1rem'
                        bg='gray.400'
                        cursor='pointer'
                        transition='background 300ms ease'
                        _hover={{
                            bg: 'brand.3',
                            color: 'white'
                        }}
                    >
                        <Icon size='30px' name='arrow-forward' />
                    </PseudoBox>
                    <Wrapper>
                        <Box
                            py='2rem'
                            display={{ xs: 'none', lg: 'block' }}
                        >
                            <Breadcrumbs
                                node={props.data.prismicProduct}
                                lang={props.pageContext.lang}
                            />
                        </Box>
                        <Grid
                            templateColumns={{ xs: '100%', lg: '1fr 1fr' }}
                            gap='3rem'
                            mb='3rem'
                        >
                            <Stack spacing='1.5rem'>
                                <Box mt={{ xs:'1rem', lg:'2rem'}}>
                                    <Image src={logoReversoAir} />
                                </Box>
                                <Box>
                                    <Text as='div'>
                                        <Heading
                                            as='h1'
                                            fontSize='16px'
                                            fontFamily='Hind'
                                            fontWeight='500'
                                            display='inline'
                                        >
                                            {data.title.text}&nbsp;
                                        </Heading>
                                        {data.intro}
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
                                    <Box>
                                        <ButtonConfig>
                                            Pricing and boat configuration
                                        </ButtonConfig>
                                    </Box>
                                    <Box
                                        display={{ xs: 'none', lg: 'flex' }}
                                    >
                                        <BtnSecondary>Order now</BtnSecondary>
                                    </Box>
                                </Stack>

                            </Stack>
                            <Box
                                // bg='gray.50'
                                maxW='100%'
                                overflowX='hidden'
                            >
                                <Img
                                    style={{
                                        maxWidth: '100%',
                                        objectFit: 'contain'
                                    }}
                                    // fixed={
                                    //     props.image2.localFile.childImageSharp.fixed
                                    // }
                                    fluid={
                                        data.image_main.localFile.childImageSharp.fluid
                                    }
                                />
                            </Box>
                        </Grid>

                        <Grid templateColumns={{ xs: '100%', lg: '1fr 1fr' }} gap='2rem'>
                            <Box>
                                <Heading
                                    fontWeight='900'
                                >
                                    <FormattedMessage id='awards' />

                                </Heading>
                                <Stack
                                    py='1.5rem'
                                    isInline
                                    spacing='2rem'
                                    borderBottom='solid 1px'
                                    borderBottomColor='gray.300'
                                >
                                    <Image h='55px' src={logoBoatOfTheYear} />
                                    <Image h='55px' src={logoAudiAwards} />
                                </Stack>
                            </Box>

                            <Box>
                                <Heading
                                    fontWeight='900'
                                >
                                    <FormattedMessage id='other.versions' />
                                </Heading>

                                <Grid
                                    spacing='1rem'
                                    gap='1rem'
                                    my='2rem'
                                    templateColumns={{ xs: '100%', lg: '1fr 1fr 1fr' }}

                                >
                                    <PseudoBox
                                        w={{ xs: '100%', lg: 'auto' }}
                                        role="group"
                                        display='grid'
                                        gridTemplateColumns='50px 1fr'
                                        cursor='pointer'
                                        gridGap='.5rem'
                                        p='.5rem'
                                        bg='white'
                                        border='solid 1px'
                                        borderColor='gray.300'
                                        borderRadius='3px'
                                        transition='background 400ms ease'
                                        _hover={{
                                            bg: 'brand.boat.blue',
                                            borderColor: 'brand.boat.blue',
                                            color: 'white'
                                        }}
                                    >
                                        <Box>
                                            <Image w='50px' src={Reverso1} />
                                        </Box>
                                        <Flex
                                            pr='1rem'
                                            alignItems='center'>
                                            <Box>
                                                <Text fontSize='14px'>Reverso&nbsp;Air</Text>
                                                <PseudoBox
                                                    _groupHover={{ color: "white" }}
                                                    as={Text}
                                                    fontSize='13px'
                                                    whiteSpace='pre'
                                                    color='gray.500'>9600 €</PseudoBox>
                                            </Box>

                                        </Flex>
                                    </PseudoBox>

                                    <PseudoBox
                                        w={{ xs: '100%', lg: 'auto' }}
                                        role='group'
                                        display='grid'
                                        gridTemplateColumns='50px 1fr'
                                        cursor='pointer'
                                        gridGap='.5rem'
                                        p='.5rem'
                                        bg='white'
                                        border='solid 1px'
                                        borderColor='gray.300'
                                        borderRadius='3px'
                                        _hover={{
                                            bg: 'brand.boat.red',
                                            borderColor: 'brand.boat.red',
                                            color: 'white'
                                        }}
                                    >
                                        <Box>
                                            <Image w='50px' src={Reverso2} />
                                        </Box>
                                        <Flex
                                            pr='1rem'
                                            alignItems='center'>
                                            <Box>
                                                <Text fontSize='14px'>Reverso&nbsp;Air&nbsp;Series</Text>
                                                <PseudoBox
                                                    _groupHover={{ color: "white" }}
                                                    as={Text}
                                                    fontSize='13px'
                                                    whiteSpace='pre'
                                                    color='gray.500'>Cobalt Blue 10340 €
                                                    </PseudoBox>
                                            </Box>
                                        </Flex>
                                    </PseudoBox>

                                    <PseudoBox
                                        w={{ xs: '100%', lg: 'auto' }}
                                        role='group'
                                        display='grid'
                                        gridTemplateColumns='50px 1fr'
                                        cursor='pointer'
                                        gridGap='.5rem'
                                        p='.5rem'
                                        bg='white'
                                        border='solid 1px'
                                        borderColor='gray.300'
                                        borderRadius='3px'
                                        _hover={{
                                            bg: 'brand.boat.gray',
                                            borderColor: 'brand.boat.gray',
                                            color: 'white'
                                        }}
                                    >
                                        <Box>
                                            <Image w='50px' src={Reverso3} />
                                        </Box>
                                        <Flex
                                            pr='1rem'
                                            alignItems='center'>
                                            <Box>
                                                <Text fontSize='14px'>Reverso&nbsp;Match</Text>
                                                <PseudoBox
                                                    _groupHover={{ color: "white" }}
                                                    as={Text}
                                                    fontSize='13px'
                                                    whiteSpace='pre'
                                                    color='gray.500'>Cobalt Blue 10340 €
                                                    </PseudoBox>
                                            </Box>
                                        </Flex>
                                    </PseudoBox>

                                </Grid>
                            </Box>
                        </Grid>

                        <Stack mb='2rem' spacing='3rem'>
                            <Box>
                                <Heading
                                    fontWeight='900'
                                >
                                    <FormattedMessage id='boat.program' />
                                </Heading>
                                <SimpleGrid
                                    columns={{ xs: 1, lg: 3 }}
                                    gap={{ xs: '2rem', lg: '4rem' }}
                                    mt='2rem'
                                >
                                    {data.second_args_list.map(arg =>
                                        <Stack spacing='1.5rem'>
                                            <Heading
                                                fontWeight='400'
                                                fontFamily='hind'
                                                fontSize='18px'
                                                textTransform='uppercase'
                                            >
                                                {arg.title}
                                            </Heading>
                                            <Text>
                                                {arg.body.text}
                                            </Text>
                                        </Stack>
                                    )}
                                </SimpleGrid>
                            </Box>

                            <Box>
                                <Heading
                                    fontWeight='900'
                                >
                                    Gallery
                            </Heading>
                                <Gallery
                                    pictures={data.gallery_list}
                                />
                                {/* <SimpleGrid columns={{ xs: 1, lg: 3 }} gap='2rem'>
                                {data.gallery_list.map(item =>
                                    <Image
                                        src={item.picture.url}
                                    />
                                )}
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
                            </SimpleGrid> */}
                            </Box>

                            <SimpleGrid
                                columns={2}
                                gap='3rem'
                            >
                                <Box>
                                    <Heading
                                        fontWeight='900'
                                    >
                                        Video
                                    </Heading>
                                    <Box
                                        maxW="100%"
                                        ratio={1}
                                    >
                                        <VideoPlayer
                                            src={data.video.url}
                                            poster={VideoCover}
                                        />

                                    </Box>
                                </Box>
                                <Box>
                                    <Heading
                                        fontWeight='900'
                                    >
                                        <FormattedMessage id="your.questions" />
                                    </Heading>
                                    <AspectRatioBox ratio={16 / 9}>
                                    <Box
                                        as="iframe"
                                        src='https://form.typeform.com/to/EimY5yHO' />
                                    </AspectRatioBox>
                                </Box>


                            </SimpleGrid>

                            <Box>
                                <Heading
                                    fontWeight='900'
                                    >Mini Faq</Heading>
                                <Faq variant='light' />

                            </Box>
                            
                            <Box>
                            {/* <Heading
                                fontWeight='900'
                                mb='2rem'
                            >Boring SEO content</Heading> */}
                            <Wysiwyg content={ data.body[0].primary.content.raw } />
                            </Box>
                        </Stack>
                    </Wrapper>

                    {/* <Carousel /> */}

                </Box>
            </Box>

        </Layout>
    )
}

export default ProductTpl

export const query = graphql`
query productQuery($prismicId: ID) {
    prismicProduct( prismicId: { eq : $prismicId} ){
        ...HierachyProduct
        prismicId
        lang
        uid
        data {
            body{
                __typename
                ... on PrismicProductBodyWysiwyg{
                    slice_type
                    slice_label
                    primary{
                        content{
                            html
                            raw
                        }
                    }
                }
            }
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
            title{
                text
            }
            intro
            image_main {
                localFile {
                    childImageSharp {
                        fixed(height: 1000, width: 1000) { srcSet srcWebp aspectRatio base64 height originalName src srcSetWebp tracedSVG width }
                        fluid {
                            ...GatsbyImageSharpFluid_noBase64
                            aspectRatio base64 originalImg originalName presentationHeight presentationWidth sizes src srcSet srcSetWebp srcWebp tracedSVG }                }
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
                localFile {
                    publicURL
                    childImageSharp {
                        fixed(height: 300) {
                        src
                        }
                    }
                }
                dimensions {
                    height
                    width
                }
                }
            }
        }
    }
}
`