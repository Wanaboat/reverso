import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/layout'
import Breadcrumbs from '../components/Breadcrumbs'
import {
    AspectRatioBox,
    Button,
    Box,
    Flex,
    Heading,
    Grid,
    Icon,
    Image,
    List,
    Link,
    ListItem,
    Stack,
    Text,
    SimpleGrid,
    PseudoBox
} from '@chakra-ui/core'

import shapeGray from '../images/shape-triangle.svg'
import logoReversoAir from '../images/logo-air.svg'
import logoReversoAirBlue from '../images/logo-air-blue.svg'
import logoReversoAirRed from '../images/logo-air-red.svg'
import logoReversoMatch from '../images/logo-match.svg'
import Wrapper from '../components/Wrapper'

import logoBoatOfTheYear from '../images/logo-boat-of-year.svg'
import logoAudiAwards from '../images/logo-audi-awards.svg'
import FaqSimple from '../components/FaqSimple'
// import Carousel from '../components/Carousel'

import ButtonConfig from '../components/Buttons/config'
import ButtonOrder from '../components/Buttons/order'
// import TypeFormConfigButton from '../components/Buttons/TypeFormConfigButton'

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
import Reverso3d from '../components/Reverso3d'

const ProductTpl = (props) => {

    const { data } = usePreviewData(props.data.prismicProduct)
    const [formVisible, setFormVisible] = useState(false)
    let structuredProductData = {
        "@context": "http://schema.org/",
        "@type": "Product",
        "name": `Reverso Air`,
        "brand": 'Reverso Project',
        "sku": `RVAIR`,
        "description": `Foldable performance dinghy`,
        "url": `https://sailreverso.com/fr/nos-deriveurs/reverso-air/`,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "€",
            "price": `7800`,
            "availability": "InStoreOnly",
            "itemCondition": "https://schema.org/UsedCondition",
            "seller": {
                "@type": "Organization",
                "name": `ReversoProject`
            },
            "url": `https://sailreverso.com/fr/nos-deriveurs/reverso-air/`,
            "priceValidUntil": "2022/01/01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "35"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.9",
            "bestRating": "5"
          },
          "author": {
            "@type": "Website",
            "name": `ReversoProject`
          }
        },
      };

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
                        href={`${process.env.GATSBY_BASE_URL}${linkResolver({ prismicId: props.data.prismicProduct.alternate_languages[0].document.prismicId })} `}
                        hreflang={props.pageContext.lang === 'en' ? 'fr' : 'en'}
                    // hreflang="x-default"
                    />
                    : null}

                    
                <script className='structured-data-product' type="application/ld+json">{ JSON.stringify(structuredProductData) }</script>

            </Helmet>
            <Box
                bg='white'
            >
                <Box
                    // display='none'
                    background={`url(${shapeGray}) no-repeat left top`}
                    backgroundSize='50%'
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
                            mt='2rem'
                        >
                            <Stack spacing='2.5rem'>
                                <Box mt={{ xs: '1rem', lg: '2rem' }}>
                                    <Image src={
                                        data.logo === 'air' ?
                                            logoReversoAir
                                            : data.logo === 'series-red' ?
                                                logoReversoAirRed
                                                : data.logo === 'series-blue' ?
                                                    logoReversoAirBlue
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
                                        {data.args_list.map((arg, index) =>
                                            <ListItem
                                                key={`args-list-item-${index}`}
                                            >
                                                {arg.item}
                                            </ListItem>

                                        )}
                                    </List>
                                </Box>
                                {/* <Stack
                                    isInline
                                    spacing='1rem'
                                    shouldWrapChildren={true}
                                > */}
                                <Grid
                                    templateColumns={{ xs: '100%', lg: '1fr 100%' }}
                                    gap='1rem'
                                >
                                    <Box>
                                        <ButtonConfig>
                                            <FormattedMessage id="pricing.and.boat.configuration" />
                                        </ButtonConfig>
                                        {/* <TypeFormConfigButton /> */}
                                    </Box>
                                    <Box>
                                        <ButtonOrder>
                                            <FormattedMessage id="order.now" />
                                        </ButtonOrder>
                                    </Box>
                                </Grid>
                                {/* </Stack> */}
                            </Stack>
                            <Box
                                // bg='gray.50'
                                maxW='100%'
                            >
                                <AspectRatioBox
                                    w='100%'
                                    maxW="560px"
                                    ratio={1 / 1}
                                >
                                    <Box
                                        as='picture'
                                    >
                                        {data.image_main.localFile ?
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

                                                    {version.version_link.document.data.image_main_small.localFile ?
                                                        <>
                                                            <source type='image/jpeg' srcSet={version.version_link.document.data.image_main_small.localFile.src} />
                                                            <source type='image/webp' srcSet={version.version_link.document.data.image_main_small.localFile.srcWebp} />
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
                            <Box
                                mx={{ xs: '-1rem', lg: 0 }}
                            >
                                <Reverso3d url={data.three_dimension_link.url} />
                            </Box>
                            <Box>
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
                            <AspectRatioBox ratio={ 16/9 }>
                                <Box
                                    as='iframe'
                                    src='https://www.youtube.com/embed/qM7XuztLZaY'
                                />   
                            </AspectRatioBox>
                            <SimpleGrid
                                display='none'
                                columns={{ xs: 1, lg: 2 }}
                                gap='2rem'
                            >
                                <Box
                                    border='solid 1px'
                                    borderColor='gray.100'
                                    p='1rem'
                                    bg='gray.50'
                                    borderRadius='4px'
                                >
                                    <Heading
                                        fontWeight='900'
                                        as='h4'
                                        mb='1rem'
                                    >
                                        Video
                                    </Heading>
                                    <Box
                                        as='iframe'
                                        ratio={16 / 9}
                                        w='100%'
                                        h='300px'
                                        allowFullScreen
                                        src="https://player.vimeo.com/video/430264806"
                                    />
                                    {/* <VideoPlayer
                                            src={data.video.url}
                                            poster={VideoCover}
                                        /> */}


                                </Box>
                                <Box
                                    border='solid 1px'
                                    borderColor='gray.100'
                                    p='1rem'
                                    bg='gray.50'
                                    borderRadius='4px'
                                >
                                    <Box>
                                        <Heading
                                            fontWeight='900'
                                            as='h4'
                                            mb='1rem'
                                        >
                                            <FormattedMessage id="your.questions" />
                                        </Heading>
                                        <Stack
                                            spacing='0rem'
                                        >
                                            <PseudoBox
                                                role="group"
                                                display='flex'
                                                alignItems='center'
                                                borderBottom='solid 1px'
                                                borderBottomColor='gray.100'
                                                p='1rem 1rem'
                                                as={GatsbyLink}
                                                to={ data.related_faq.document ? linkResolver( data.related_faq.document ) : '/null'}
                                                _hover={{
                                                    bg: 'gray.100',
                                                    color: "brand.1",

                                                }}
                                            >
                                                <Text
                                                    pr={{ xs: '0', lg: '3rem' }}
                                                >
                                                    { data.faq_link_sentence ? data.faq_link_sentence :
                                                        <>Curious about Reverso's ? We have a nice Faq with a lot of informations about our incredible small sailing dinghy.</>
                                                    }
                                                </Text>
                                                <PseudoBox
                                                    transition='all 200ms ease'
                                                    transform='translateX(-.5rem)'
                                                    _groupHover={{
                                                        color: "brand.1",
                                                        transform: 'translateX(.25rem)'
                                                    }}
                                                >
                                                    <Icon name='arrow-forward' />
                                                </PseudoBox>
                                            </PseudoBox>
                                            {!formVisible ?
                                                <PseudoBox
                                                    cursor='pointer'
                                                    role="group"
                                                    display='flex'
                                                    alignItems='center'
                                                    borderBottom='solid 1px'
                                                    borderBottomColor='gray.100'
                                                    p='1rem 1rem'
                                                    _hover={{
                                                        bg: 'gray.100',
                                                        color: "brand.1",

                                                    }}
                                                    onClick={() => { setFormVisible(true) }}
                                                >
                                                    <Text
                                                        pr={{ xs: '0', lg: '3rem' }}
                                                    >
                                                        { data.form_link_sentence ? data.form_link_sentence :
                                                            <>If you cannot find the info you're looking for. Just contact us, we reply very quickly.</>
                                                        }
                                                    </Text>
                                                    <PseudoBox
                                                        transition='all 200ms ease'
                                                        transform='translateX(-.5rem)'
                                                        _groupHover={{
                                                            color: "brand.1",
                                                            transform: 'translateX(.25rem)'
                                                        }}
                                                    >
                                                        <Icon name='arrow-forward' />
                                                    </PseudoBox>
                                                </PseudoBox>
                                                : <SimpleQuestionForm />}


                                        </Stack>
                                    </Box>
                                </Box>
                            </SimpleGrid>
                            {/* <Box>
                                <Heading
                                    fontWeight='900'
                                >Mini Faq</Heading>
                                <FaqSimple variant='light' />
                            </Box> */}
                            <Box>
                                <SliceEngine data={data.body} />
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
            document{
              ... on PrismicPage{ prismicId }
              ... on PrismicProduct{ prismicId }
            }
          }
        prismicId
        lang
        uid
        data {
            body{
                __typename

                ... on PrismicProductBodyIllustratedSummary {
                    primary{
                      hide_text
                      summary_title
                      summary_intro_rich{ raw }
                    }
                    items{
                      link_target{
                        document{
                          ... on PrismicPage{ prismicId }
                          ... on PrismicProduct{ prismicId }
                        }
                      }
                      link_label
                      link_image {
                        alt
                        thumbnails {
                          landscape {
                            fixed{ src }
                            localFile {
                              childImageSharp {
                                fixed( width:550 height:250) {
                                  src
                                  srcWebp
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                ... on PrismicProductBodyTwoColumnsText{
                    primary{
                      column_1{ html raw }
                      column_2{ html raw }
                      background_color
                      button_label
                      button_target{
                        document{ ... on PrismicPage {
                          prismicId
                          data{ title{ text }}
                        }}
                      }
                    }
                  }
                ... on PrismicProductBodyCriteriaList {
                    primary {
                      background_color
                      criteria_list_title{ text }
                      related_criteria {
                        document{ ...on PrismicCriteriaList{
                          data{
                            title{ text }
                            is_centered
                            item_prefix
                            body{
                            ... on PrismicCriteriaListBodyColumn{
                              primary{ item_prefix column_title{ text } }
                              items { item }
                              id
                            }
                          }}
                        }}
                      }
                    }
                }
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
                    accordion_title{ text }
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
                        fixed(height: 550, width: 550) { srcSet srcWebp aspectRatio base64 height originalName src srcSetWebp tracedSVG width }
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
            three_dimension_link{ url }
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
                            srcWebp
                            }
                        }
                    }
                    dimensions {
                        height
                        width
                    }
                }
            }
            faq_link_sentence
            form_link_sentence
            related_faq{
            document{ ... on PrismicPage{ prismicId }}
            }
        }
    }
}
`