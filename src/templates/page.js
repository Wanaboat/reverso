import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import buildSlug from '../utils/buildSlug'
import Breadcrumbs from '../components/Breadcrumbs'
import Img from "gatsby-image"
import { withPreview } from 'gatsby-source-prismic'
import usePreviewData from '../utils/usePreviewData'
import PageContent from '../components/PageContent'
import Hierarchy from '../components/hierachyPage'
import SliceEngine from '../components/slices/Engine'
import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid
} from '@chakra-ui/core'
import Wrapper from '../components/Wrapper'

const PageTpl = (props) => {

  const data = usePreviewData(props.data)

  console.log('data', data)

  return (
    <Layout lang={props.pageContext.lang}>
      <Helmet>
        <title>{props.data.prismicPage.data.seo_title}</title>
        <meta name='description' content={props.data.prismicPage.data.seo_description} />
        <link
          rel='canonical'
          href={`${process.env.GATSBY_BASE_URL}/${buildSlug(props.data.prismicPage, props.pageContext.lang)}`}
        />
        {props.data.prismicPage.alternate_languages[0] ?
          <link
            rel="alternate"
            href={`${process.env.GATSBY_BASE_URL}/${buildSlug(props.data.prismicPage.alternate_languages[0], props.pageContext.lang)}`}
            hreflang="x-default"
          />
          : null}
      </Helmet>

      <Wrapper
        bg='white'
        // borderBottom='solid 1px'
        // borderColor='gray.200'
        py={{ xs:'1rem', lg:'1rem'}}
        px={{ xs:'1.5rem' }}
        display={{ xs:'none', md:'block' }}
      >
        {/* <Box
          py={{ xs:'.5rem', lg:'.5rem' }}
          color='gray.900'
          display={{ xs: 'block', md: 'block' }}
        > */}
          <Breadcrumbs
            node={props.data.prismicPage}
            lang={props.pageContext.lang}
          />
        {/* </Box> */}
      </Wrapper>
      <Wrapper>
        <Heading
          position='relative'
          my={{ xs:'.5rem', lg:'1rem' }}
          as='h1'
          pb='1rem'
          fontWeight='900'
          textAlign={ data.prismicPage.data.is_title_centered ? 'center' : 'left' }
        >
          {data.prismicPage.data.title.text}
          {data.prismicPage.data.title_suffix ? 
            <Text
              as='span'
              color='brand.1'
              fontWeight='900'
              fontFamily='Roboto'
            >
                &nbsp;{ data.prismicPage.data.title_suffix }
            </Text>
          : null}
          <Box
            w='100px'
            h='6px'
            bg='gray.900'
            position='absolute'
            bottom='0'
            left={ data.prismicPage.data.is_title_centered ? 'calc(50% - 50px)': '0'}
          />
        </Heading>
      </Wrapper>
      <SliceEngine data={data.prismicPage.data.body} />
      {/* { data.prismicPage.data.body ? 
        <Wysiwyg content={ data.prismicPage.data.body[0].primary.content.raw } />
      : null } */}
      {/* <PageContent /> */}
    </Layout>
  )
}

export default PageTpl

export const query = graphql`
query pageQuery($prismicId: ID) {
    prismicPage( prismicId: { eq : $prismicId} ){
        ...HierachyPage
        prismicId
        lang
        uid
        alternate_languages {
          lang
          document {
            ... on PrismicPage {
              id
              uid
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
        data {
          title{
              text
          }
          title_suffix
          is_title_centered
          seo_title
          seo_description
            image {
              alt
              copyright
              url
              localFile {
                childImageSharp {
                  original {
                    src
                  }
              fixed {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
              srcSet
              height
              src
              width
                  }
                }
              }
            }
            body {
              ... on PrismicPageBodyQuote {
                primary{
                  quote_content{ html raw }
                  quote_signature
                }
              }
              ... on PrismicPageBodyIllustratedSummary {
                primary{
                  summary_title
                  summary_intro
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
                        localFile {
                          childImageSharp {
                            fixed {
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
              ... on PrismicPageBodyImageAlone {
                primary{
                  wide_display
                  isolated_image{ alt localFile{ childImageSharp{ fixed(width:1000){ src srcWebp } } } }
                }
              }
              ... on PrismicPageBodyGallery{
                items{
                  picture{
                    dimensions { height width }
                    localFile{ childImageSharp{ fixed{ src srcWebp } } }
                  }
                }
              }
              ... on PrismicPageBodyTwoIllustratedButtons {
                primary {
                  anchor
                  label_1
                  label_2
                  image_1 { localFile { childImageSharp { fixed { src srcWebp } } } }
                  image_2 { localFile { childImageSharp { fixed { src srcWebp } } } }
                }
              }
              ... on PrismicPageBodyHorizontalButtons{
                items{
                  button_image{
                    localFile{ childImageSharp{ fixed(width: 300, height: 600){ src srcWebp } }}
                  }
                  label_primary
                  label_secondary
                  button_label
                  button_target{
                    document{
                      ... on PrismicPage{
                        prismicId
                      }
                    }
                  }
                }
              }
              ... on PrismicPageBodyFigures {
                primary {
                  title1 {
                    raw
                    text
                  }
                  figure_1
                  figure_2
                }
              }
              ... on PrismicPageBodySummaryLinks {
                id
                #anchor
                items {
                  link {
                    document {
                      ... on PrismicPage{
                        prismicId
                        data{
                          title {
                            html
                            text
                            raw
                          }
                        }
                      }
                      ... on PrismicProduct{
                        prismicId
                        data{
                          title {
                            html
                            text
                            raw
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicPageBodyWysiwyg {
                primary {
                  anchor
                  is_narrow
                  content {
                    html
                    raw
                  }
                }
              }
              ... on PrismicPageBodyImageAndText {
                primary {
                  anchor
                  reverse_position
                  background_color
                  vertical_align
                  text_extra_margin
                  content { raw }
                  button_label
                  button_target {
                    document{
                      ... on PrismicPage{
                        prismicId
                      }
                      ... on PrismicProduct{
                        prismicId
                      }
                    }
                  }
                  image1{
                      alt
                      localFile {
                          childImageSharp {
                              fixed(height: 400, width: 600) {
                                  src
                              }
                          }
                      }
                  }
                }
              }
            }
          

            #parent {
            #  document {
            #    ... on PrismicPage {
            #      data{ title{ text } }
            #      uid
            #      data {
            #        parent {
            #          document {
            #            ... on PrismicPage {
            #              data{ title{ text } }
            #              uid
            #              data {
            #                parent {
            #                  document {
            #                    ... on PrismicPage {
            #                      data{ title{ text } }
            #                      uid
            #                    }
            #                  }
            #                }
            #              }
            #            }
            #          }
            #        }
            #      }
            #    }
            #  }
            #}
        }
      }
     
}`