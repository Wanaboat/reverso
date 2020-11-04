import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import {
    Box,
    Flex,
    Heading
} from '@chakra-ui/core'

import HomepageHero from '../components/HomepageHero'
// import NewsletterForm from '../components/NewsletterForm'

import SliceBannerAndDescription from '../components/slices/BannerAndDescription'
import SliceNewsletterSubscription from '../components/slices/SliceNewsletterSubscription'
import SliceLogosList from '../components/slices/SliceLogosList'
import SliceCenteredOneColumn from '../components/slices/CenteredOneColumn'

const HomeTpl = (props) => {

    const { prismicHomepage } = props.data
    console.log( 'hp props', prismicHomepage )


    return (
        <Layout lang={props.pageContext.lang}>

        <Helmet>
        <title>{prismicHomepage.data.seo_title}</title>
        <meta name='description' content={prismicHomepage.data.seo_description} />
        <meta property="og:title" content={ prismicHomepage.data.seo_title } />
        <meta property="og:description" content={ prismicHomepage.data.seo_description } />
        <link
          rel='canonical'
          href={`${'fr'}`}
        />
          <link
            rel="alternate"
            href={`${'/'}`}
            hreflang="x-default"
          />
          <meta property='og:image' content={ `${process.env.GATSBY_BASE_URL}/${prismicHomepage.data.sharing_image.localFile.childImageSharp.fixed.src }` } />
          <meta property='og:type' content='website' />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

      </Helmet>

            <HomepageHero data={ prismicHomepage.dataRaw } image1={prismicHomepage.data.hero_image_1} image2={prismicHomepage.data.hero_image_2} />
            <SliceLogosList />
            <SliceBannerAndDescription />
            <SliceBannerAndDescription />
            <SliceNewsletterSubscription />
            <SliceCenteredOneColumn />


        </Layout>
    )
}

export default HomeTpl

export const query = graphql`
query HpQuery($langIso:String!) {
    prismicHomepage( lang : { eq: $langIso }) {
        dataRaw
        data {
            sharing_image {
                localFile {
                    childImageSharp {
                    fixed(height: 630, width: 1200) {
                        src
                    }
                }
            }
          }
          hero_image_1 {
            alt
            copyright
            url
            thumbnails
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
            thumbnails
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
        }
    }
}`