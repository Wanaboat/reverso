import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomepageHero from '../components/HomepageHero'
import SliceEngine from '../components/slices/Engine'
import { AspectRatioBox, Box } from '@chakra-ui/core'
import Reverso3d from '../components/Reverso3d'
import Wrapper from '../components/Wrapper'
const HomeTpl = (props) => {

  const { prismicHomepage } = props.data
  // console.log( 'hp props', props.data )
  console.log('props.pageContext.lang', props.pageContext.lang)
  return (
    <Layout lang={props.pageContext.lang}>
      <Helmet>
        <title>{prismicHomepage.data.seo_title}</title>
        <meta name='description' content={prismicHomepage.data.seo_description} />
        <meta property="og:title" content={prismicHomepage.data.seo_title} />
        <meta property="og:description" content={prismicHomepage.data.seo_description} />
        <link
          rel='canonical'
          href={`${process.env.GATSBY_BASE_URL}/${props.pageContext.lang === 'fr' ? 'fr/' : ''}`}
        />
        <link
          rel="alternate"
          href={`${process.env.GATSBY_BASE_URL}`}
          hreflang="x-default"
        />
        <meta property='og:image' content={`${process.env.GATSBY_BASE_URL}/${prismicHomepage.data.sharing_image.localFile ? prismicHomepage.data.sharing_image.localFile.childImageSharp.fixed.src : ''}`} />
        <meta property='og:type' content='website' />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property='og:url' content={`${process.env.GATSBY_BASE_URL}/${'fr'}`} />
      </Helmet>
      <HomepageHero
        data={prismicHomepage.data}
        image1={prismicHomepage.data.hero_image_1}
        image2={prismicHomepage.data.hero_image_2}
        args_list={prismicHomepage.data.args_list}
        second_args_list={prismicHomepage.data.second_args_list}
      />
      {/* 
          <SliceLogosList />
          <SliceBannerAndDescription />
          <SliceBannerAndDescription />
          <SliceNewsletterSubscription />
          <SliceCenteredOneColumn />
      */}
      <Wrapper
        py='1rem'
        // bg='brand.3'
      >
        <Reverso3d />
      </Wrapper>
      <SliceEngine data={prismicHomepage.data.body} />
    </Layout>

  )
}

export default HomeTpl

export const query = graphql`
query HpQuery($langIso:String!) {
    prismicHomepage( lang : { eq: $langIso }) {
        #dataRaw
        data {
            body {
              ... on PrismicHomepageBodyLogosList{
                primary{
                  logo_list_title
                }
                items{
                  logo_item{
                    alt
                    localFile{ childImageSharp{ fixed( height: 80) { src, srcWebp }}}
                  }
                }
              }
              ... on PrismicHomepageBodySummaryLinks {
                id
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
              ... on PrismicHomepageBodyWysiwyg {
                primary {
                  content {
                    html
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyImageAndText {
                primary {
                  reverse_position
                  background_color
                  content { raw }
                  button_label
                  button_target {
                    document{
                      ... on PrismicHomepage{
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

            seo_title
            seo_description
            intro_title
            title
            title_suffix
            title_prefix
            button_label
            button_target {
              document {
                ... on PrismicPage { prismicId }
                ... on PrismicProduct { prismicId }
              }
            }
            secondary_button_label
            secondary_button_target {
              document {
                ... on PrismicPage { prismicId }
                ... on PrismicProduct { prismicId }
              }
            }
            secondary_title{
                text
            }
            sharing_image {
                localFile {
                    childImageSharp {
                        fixed(height: 630, width: 1200) {
                            src
                        }
                    }
                }
            }  
            args_list {
                item
              }
            second_args_list {
                answer {
                    html
                    text
                    raw
                }
                question
            }
          hero_image_1 {
            alt
            copyright
            url
            localFile {
              childImageSharp {
                original {
                  src
                }
                fixed { base64 tracedSVG aspectRatio srcWebp srcSetWebp originalName srcSet height src width }
                fluid {
                    aspectRatio base64 originalImg originalName presentationHeight presentationWidth sizes src srcSet srcSetWebp srcWebp tracedSVG
                }
              }
            }
          }
          hero_image_2 {
            alt
            copyright
            url
            localFile {
              childImageSharp {
                original {
                  src
                }
                fixed(width: 560, height: 420) { base64 tracedSVG aspectRatio srcWebp srcSetWebp originalName srcSet height src width }
                fluid {
                    aspectRatio base64 originalImg originalName presentationHeight presentationWidth sizes src srcSet srcSetWebp srcWebp tracedSVG
                }
              }
            }
          }
        }
    }
}`