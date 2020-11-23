import React from 'react'
import Helmet from 'react-helmet'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Breadcrumbs'
import {
    AspectRatioBox,
    Box,
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
import logoReversoAir from '../images/logo-air.svg'
import logoReversoAirSeries from '../images/logo-air-series.svg'
import logoReversoMatch from '../images/logo-match.svg'
import Wrapper from '../components/Wrapper'

import logoBoatOfTheYear from '../images/logo-boat-of-year.svg'
import logoAudiAwards from '../images/logo-audi-awards.svg'
import FaqSimple from '../components/FaqSimple'
// import Carousel from '../components/Carousel'

import ButtonConfig from '../components/Buttons/config'
import ButtonOrder from '../components/Buttons/order'

import SimpleQuestionForm from '../components/SimpleQuestionForm'

import VideoPlayer from '../components/VideoPlayer'
// import Gallery from '../components/Gallery'
import CarouselPictures from '../components/CarouselPictures'

import VideoCover from '../images/video-cover.jpg'
import { FormattedMessage } from 'react-intl'
// import Hierarchy from '../components/hierachyProduct'
// import AccordionQuery from '../fragments/accordion'

import SliceEngine from '../components/slices/Engine'

import { linkResolver } from '../prismic-configuration'
import usePreviewData from '../utils/usePreviewData'

const ProductTpl = (props) => {

    const {data} = usePreviewData(props.data.prismicProduct)

    // const { data } = props.data.prismicProduct.data

    console.log('productData', data)

    return (
        <Layout lang={props.pageContext.lang}>
            <Helmet>
                <title>{data.seo_title}</title>
                <meta name='description' content={data.seo_description} />
                <link
                    rel='canonical'
                    href={`${process.env.GATSBY_BASE_URL}${linkResolver(props.data.prismicProduct)}`}
                />
                {props.data.prismicProduct.alternate_languages[0] ?
                    <link
                        rel="alternate"
                        href={`${process.env.GATSBY_BASE_URL}${linkResolver(props.data.prismicProduct.alternate_languages[0].raw)}`}
                        hreflang="x-default"
                    />
                    : null}
            </Helmet>
            <Box
                bg='white'
            >
                <Box
                    // display='none'
                    background={`url(${shapeGray}) no-repeat left top`}
                    position='relative'
                >
                    {/* {data.versions[0] ?
                        <>
                            <PseudoBox
                                as={GatsbyLink}
                                to={linkResolver(data.versions[0].version_link.document)}
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
                                as={GatsbyLink}
                                to={linkResolver(data.versions[data.versions.length - 1].version_link.document)}
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
                        </>
                    : null} */}
                    <Wrapper>
                        <Box
                            py='1.5rem'
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
                            mt='3rem'
                        >
                            <Stack spacing='1.5rem'>
                                <Box mt={{ xs: '1rem', lg: '2rem' }}>
                                    <Image src={
                                        data.logo === 'air' ?
                                            logoReversoAir
                                            : data.logo === 'series' ?
                                                logoReversoAirSeries
                                                : data.logo === 'match' ?
                                                    logoReversoMatch
                                                    : logoReversoAir
                                    } />
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
                                <Box
                                    borderBottom='solid 1px'
                                    borderBottomColor='gray.300'
                                    pb='2rem'
                                >
                                    <List
                                        spacing='1rem'
                                        listStyleType='disc'
                                    >
                                        {data.args_list.map((arg,index) =>
                                            <ListItem
                                                key={`args-list-item-${index}`}
                                            >
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
                                            <FormattedMessage id="pricing.and.boat.configuration" />
                                        </ButtonConfig>
                                    </Box>
                                    <Box>
                                        <ButtonOrder>
                                            <FormattedMessage id="order.now" />
                                        </ButtonOrder>
                                    </Box>
                                </Stack>
                            </Stack>
                            <Box
                                // bg='gray.50'
                                maxW='100%'
                            >
                                <AspectRatioBox
                                    w='100%'
                                    maxW="560px"
                                    ratio={700 / 500}
                                >
                                    <Box
                                        as='picture'
                                    >
                                        { data.image_main.localFile ? 
                                            <>
                                                <source type='image/jpeg' srcSet={data.image_main.localFile.childImageSharp.fixed.srcSetWebp} />
                                                <source type='image/webp' srcSet={data.image_main.localFile.childImageSharp.fixed.srcSet} />
                                            </>
                                        : null}
                                        <Image
                                            display='block'
                                            m='0'
                                            src={
                                                data.image_main.localFile ?
                                                    data.image_main.localFile.childImageSharp.fixed.src
                                                :
                                                    data.image_main.fixed.src   
                                            }
                                        />
                                    </Box>
                                </AspectRatioBox>
                            </Box>
                        </Grid>
                        <Grid templateColumns={{ xs: '100%', lg: '1fr 1fr' }} gap='2rem'>
                            <Box>
                                {/* <Heading
                                    fontWeight='900'
                                >
                                    <FormattedMessage id='awards' />

                                </Heading> */}
                                <Stack
                                    py='1.5rem'
                                    isInline
                                    spacing='2rem'
                                    borderBottom='solid 1px'
                                    borderBottomColor='gray.300'
                                >
                                    <Image h='35px' src={logoBoatOfTheYear} />
                                    <Image h='35px' src={logoAudiAwards} />
                                </Stack>
                            </Box>

                            <Box>
                                {/* <Heading
                                    fontWeight='900'
                                >
                                    <FormattedMessage id='other.versions' />
                                </Heading> */}

                                <Grid
                                    spacing='1rem'
                                    gap='1rem'
                                    my='1rem'
                                    mb='2rem'
                                    templateColumns={{ xs: '100%', lg: '1fr 1fr 1fr' }}

                                >
                                    {
                                        data.versions.map((version, index) =>
                                            <PseudoBox
                                                key={`versions-list-item-${index}`}
                                                as={GatsbyLink}
                                                to={linkResolver(version.version_link.document)}
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
                                                    bg: version.hover_color,
                                                    borderColor: version.hover_color,
                                                    color: 'white'
                                                }}
                                            >
                                                <Box as='picture'>

                                                    { version.version_link.document.data.image_main_small.localFile ? 
                                                        <>
                                                            <source type='image/jpeg' srcSet={ version.version_link.document.data.image_main_small.localFile.src } />
                                                            <source type='image/webp' srcSet={ version.version_link.document.data.image_main_small.localFile.srcWebp } />
                                                        </>
                                                    : null}
                                                    <Image w='50px' src={
                                                        version.version_link.document.data.image_main_small.localFile
                                                            ? version.version_link.document.data.image_main_small.localFile.childImageSharp.fixed.src
                                                            : version.version_link.document.data.image_main_small.fixed.src
                                                    } />
                                                </Box>
                                                <Flex
                                                    pr='1rem'
                                                    alignItems='center'>
                                                    <Box>

                                                        <Text fontSize='14px'>{version.version_title}</Text>
                                                        <PseudoBox
                                                            _groupHover={{ color: 'white' }}
                                                            as={Text}
                                                            fontSize='13px'
                                                            whiteSpace='pre'
                                                            color='gray.500'>{version.version_sub_title}</PseudoBox>
                                                    </Box>
                                                </Flex>
                                            </PseudoBox>
                                        )
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                        <Stack mt='4rem' mb='2rem' spacing='5rem'>
                            <Box>
                                {/* <Heading
                                    fontWeight='900'
                                >
                                    Gallery
                                </Heading> */}
                                <CarouselPictures
                                    pictures={data.gallery_list}
                                />
                                {/* <Gallery
                                    pictures={data.gallery_list}
                                /> */}
                            </Box>
                            <Box>
                                <Heading
                                    fontWeight='900'
                                    textTransform='uppercase'
                                >
                                    <FormattedMessage id='boat.program' />
                                </Heading>
                                <SimpleGrid
                                    columns={{ xs: 1, lg: 3 }}
                                    gap={{ xs: '2rem', lg: '4rem' }}
                                    mt='2rem'
                                >
                                    {data.second_args_list.map((arg, index) =>
                                        <Stack
                                            spacing='1.5rem'
                                            key={`second-args-list-item-${index}`}
                                        >
                                            <Heading
                                                fontWeight='400'
                                                fontFamily='hind'
                                                fontSize='24px'
                                                letterSpacing='0.15rem'
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
                            <SimpleGrid
                                columns={{ xs: 1, lg: 2 }}
                                gap='3rem'
                            >
                                <Box>
                                    <Heading
                                        fontWeight='900'
                                    >
                                        Video
                                    </Heading>

                                    <Box
                                        as='iframe'
                                        ratio={ 16/9 }
                                        w='100%'
                                        h='100%'
                                        allowFullScreen
                                        src="https://player.vimeo.com/video/430264806"
                                    />
                                        {/* <iframe title="vimeo-player"  width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
                                        {/* <VideoPlayer
                                            src={data.video.url}
                                            poster={VideoCover}
                                        /> */}

                                    
                                </Box>
                                <Box>
                                    <Heading
                                        fontWeight='900'
                                    >
                                        <FormattedMessage id="your.questions" />
                                    </Heading>
                                    <SimpleQuestionForm />
                                </Box>
                            </SimpleGrid>
                            {/* <Box>
                                <Heading
                                    fontWeight='900'
                                >Mini Faq</Heading>
                                <FaqSimple variant='light' />
                            </Box> */}
                            <Box>
                                <SliceEngine data={ data.body } />
                            </Box>
                        </Stack>
                    </Wrapper>
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
        alternate_languages{
			raw
        }
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
                ... on PrismicProductBodyAccordion {
                    primary {
                      accordion_link {
                        document {
                          ... on PrismicAccordion {
                            data {
                                accordion {
                                  title
                                  image {
                                    document {
                                      __typename
                                    }
                                    url
                                  }
                                  intro
                                  content {
                                    raw
                                  }
                                }
                            }
                          }
                        }
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
            logo
            intro
            image_main {
                fixed{
                    src
                }
                localFile {
                    childImageSharp {
                        fixed(height: 500, width: 700) { srcSet srcWebp aspectRatio base64 height originalName src srcSetWebp tracedSVG width }
                        fluid {
                            ...GatsbyImageSharpFluid_noBase64
                            aspectRatio base64 originalImg originalName presentationHeight presentationWidth sizes src srcSet srcSetWebp srcWebp tracedSVG }                }
                }
            }
            image_main_small{
                localFile{ childImageSharp{ fixed{ src srcWebp } } }
            }
            video {
                url
            }
            seo_title
            args_list {
                item
            }
            versions{
                version_link{
                    document{
                    ... on PrismicProduct{
                      prismicId
                      data{
                        image_main_small{
                            localFile{ childImageSharp{ fixed{ src srcWebp } } }
                        }
                        image_main{
                          fixed{ src }
                          localFile{
                            childImageSharp{
                              fixed( width: 100, height: 100){
                                srcWebp
                                src
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                version_title
                version_sub_title
                hover_color
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
                    thumbnails{
                        landscape_wide{
                            localFile{ childImageSharp{ fixed { src srcWebp }} }
                        }
                    }
                    alt
                    fixed{ src }
                    localFile {
                        publicURL
                        childImageSharp {
                            fixed(width: 1150, height:600) {
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