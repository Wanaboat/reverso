import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import buildSlug from '../utils/buildSlug'
import Breadcrumbs from '../components/Breadcrumbs'
import Img from "gatsby-image"
import { withPreview } from 'gatsby-source-prismic'
import usePreviewData from '../utils/usePreviewData'

import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid
} from '@chakra-ui/core'

const PageTpl = (props) => {

  const data = usePreviewData(props.data)


  return (
    <Layout lang={props.pageContext.lang}>
      <Helmet>
        <title>{props.data.prismicPage.data.seo_title}</title>
        <meta name='description' content={props.data.prismicPage.data.seo_description} />
        <link
          rel='canonical'
          href={`${process.env.BASE_URL}/${buildSlug(props.data.prismicPage, props.pageContext.lang)}`}
        />
        {props.data.prismicPage.alternate_languages[0] ?
          <link
            rel="alternate"
            href={`${process.env.BASE_URL}/${buildSlug(props.data.prismicPage.alternate_languages[0], props.pageContext.lang)}`}
            hreflang="x-default"
          />
          : null}
      </Helmet>
      <Breadcrumbs
        node={props.data.prismicPage}
        lang={ props.pageContext.lang }
      />
      <Flex
        minH='100vh'
        justify='center'
        alignItems='center'
        color='gray.400'
      >
        <Box>
          <Heading as='h1'
            color='brand.secondary'
            bg='brand.primary'
          >
            H1 : {data.prismicPage.data.title.text}
          </Heading>
          <Text>
            Slug : {buildSlug(props.data.prismicPage)}
          </Text>
          <Text>
            Base URL : {process.env.BASE_URL}
          </Text>
          <Text>
            H1 : {props.data.prismicPage.data.title.text}
          </Text>
          <Text>
            Seo title : {props.data.prismicPage.data.seo_title}
          </Text>
          <Text>
            Seo description : {props.data.prismicPage.data.seo_description}
          </Text>
          <Text>
            Alternate language : {buildSlug(props.data.prismicPage.alternate_languages[0], props.pageContext.lang)}
          </Text>
          {props.data.prismicPage.data.image.localFile ?
            <Box>
              <SimpleGrid columns='2'>
                <picture>
                  <source type='image/webp' srcSet={props.data.prismicPage.data.image.localFile.childImageSharp.fixed.srcSetWebp} />
                  <source type='image/jpeg' srcSet={props.data.prismicPage.data.image.localFile.childImageSharp.fixed.srcSet} />
                  <img loading='lazy' src={props.data.prismicPage.data.image.localFile.childImageSharp.original.src} />
                </picture>
                <Img
                  fixed={props.data.prismicPage.data.image.localFile.childImageSharp.fixed}
                  alt=""
                  w='400px'
                  h='400px'
                />
              </SimpleGrid>


            </Box>
            : null}
        </Box>

      </Flex>
    </Layout>
  )
}

export default PageTpl

export const query = graphql`
query pageQuery($prismicId: ID) {
    prismicPage( prismicId: { eq : $prismicId} ){
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
          seo_title
          seo_description

            image {
              alt
              copyright
              url
              thumbnails
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
              html
              text
              raw
            }
          

            parent {
              document {
                ... on PrismicPage {
                  data{ title{ text } }
                  uid
                  data {
                    parent {
                      document {
                        ... on PrismicPage {
                          data{ title{ text } }
                          uid
                          data {
                            parent {
                              document {
                                ... on PrismicPage {
                                  data{ title{ text } }
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
     
}`