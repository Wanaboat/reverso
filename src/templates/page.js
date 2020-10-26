import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import buildSlug from '../utils/buildSlug'
import {
    Box,
    Flex,
    Text
} from '@chakra-ui/core'

const PageTpl = (props) => {
    console.log('data', props.data.prismicPage)
    return (
        <Layout lang={props.pageContext.lang}>
            <Helmet>
                <title>{props.data.prismicPage.data.seo_title}</title>
                <meta name='description' content={ props.data.prismicPage.data.seo_description } />
                <link
                    rel='canonical'
                    href={ `${process.env.BASE_URL}/${ buildSlug( props.data.prismicPage, props.pageContext.lang ) }` }
                />
                { props.data.prismicPage.alternate_languages[0] ? 
                <link
                    rel="alternate"
                    href={ `${process.env.BASE_URL}/${ buildSlug( props.data.prismicPage.alternate_languages[0], props.pageContext.lang ) }` }
                    hreflang="x-default"
                />
                : null}
            </Helmet>
            <Flex
                minH='100vh'
                justify='center'
                alignItems='center'
                color='gray.400'
            >
                <Box>
                <h1>
                    H1 : { props.data.prismicPage.data.title.text }
                </h1>
                <Text>
                    Slug : { buildSlug( props.data.prismicPage ) }
                </Text>
                <Text>
                    Base URL : { process.env.BASE_URL }
                </Text>
                <Text>
                    H1 : { props.data.prismicPage.data.title.text }
                </Text>
                <Text>
                    Seo title : { props.data.prismicPage.data.seo_title }
                </Text>
                <Text>
                    Seo description : { props.data.prismicPage.data.seo_description }
                </Text>
                <Text>
                    Alternate language : { buildSlug( props.data.prismicPage.alternate_languages[0], props.pageContext.lang ) }
                </Text>
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
     
}`