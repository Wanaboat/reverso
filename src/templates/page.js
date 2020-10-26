import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import {
    Box,
    Flex
} from '@chakra-ui/core'

const PageTpl = (props) => {
    console.log('data', props.data.prismicPage)
    return (
        <Layout lang={props.pageContext.lang}>
            <Helmet>
                <title>{props.data.prismicPage.data.seo_title}</title>
                <link rel='canonical' href={ props.data.prismicPage.data.uid } />
            </Helmet>
            <Flex
                minH='100vh'
                justify='center'
                alignItems='center'
                color='gray.400'
            >
                Page {props.data.prismicPage.data.seo_title}
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
          seo_title
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