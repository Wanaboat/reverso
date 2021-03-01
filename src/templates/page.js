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
import StickyChildrenNav from '../components/StickyChildrenNav'
import {
  Box,
  Text,
  Heading,
} from '@chakra-ui/core'
import Wrapper from '../components/Wrapper'
import { linkResolver } from '../prismic-configuration'

const PageTpl = (props) => {

  const data = usePreviewData(props.data)
  //console.log( 'Pageprops', props )
  //console.log('PageData', data)
  //console.log('Context', props.pageContext )
  //console.log('Sisters', data.sisters )

  return (
    <Layout lang={props.pageContext.lang}>
      <Helmet>
        <title>{props.data.prismicPage.data.seo_title}</title>
        <meta name='description' content={props.data.prismicPage.data.seo_description} />
        <link
          rel='canonical'
          href={`${process.env.GATSBY_BASE_URL}/${buildSlug(props.data.prismicPage, props.pageContext.lang)}/`}
        />
        <link
          rel='alternate'
          hreflang={props.pageContext.lang === 'en' ? 'fr' : 'en'}
          href={`${process.env.GATSBY_BASE_URL}/${buildSlug(props.data.prismicPage, props.pageContext.lang)}`}
          hreflang={props.pageContext.lang === 'en' ? 'fr' : 'en'}
        />
        {props.data.prismicPage.alternate_languages[0] ?
          <link
            rel="alternate"
            href={`${process.env.GATSBY_BASE_URL}${linkResolver({ prismicId: props.data.prismicPage.alternate_languages[0].document.prismicId })} `}
            hreflang="x-default"
          />
          : null}
        <meta name='og:title' content={props.data.prismicPage.data.seo_title ? props.data.prismicPage.data.seo_title : ''} />
        <meta name='og:description' content={props.data.prismicPage.data.seo_description ? props.data.prismicPage.data.seo_description : ''} />
        <meta name='og:url' content={`${process.env.GATSBY_BASE_URL}/${buildSlug(props.data.prismicPage, props.pageContext.lang)}`} />
        <meta name='og:type' content={`article`} />
        {props.data.prismicPage.data.sharing_image ? props.data.prismicPage.data.sharing_image.localFile ?
          <meta name='og:image' content={`${process.env.GATSBY_BASE_URL}${props.data.prismicPage.data.sharing_image.localFile.childImageSharp.fixed.src}`} />
          : null : null}
      </Helmet>
      {/* <pre>
        { JSON.stringify( data.children, null, 2 )}
      </pre> */}
      { data.prismicPage.data.display_children_sticky_nav ? <StickyChildrenNav childrenPages={data.children.edges} /> : null }
      <Wrapper
        bg='white'
        py={{ xs: '1rem', lg: '1rem' }}
        px={{ xs: '1.5rem' }}
        display={{ xs: 'none', md: 'block' }}
      >
        <Box
          py='1.5rem'
          display={{ xs: 'none', lg: 'block' }}
        >
          <Breadcrumbs
            node={props.data.prismicPage}
            lang={props.pageContext.lang}
          />
        </Box>
      </Wrapper>
      <Wrapper>
        <Heading
          position='relative'
          my={{ xs: '.5rem', lg: '1rem' }}
          as='h1'
          mt={{ xs:'2rem', lg:'0'}}
          pb='1rem'
          mb='1rem'
          fontWeight='900'
          textAlign={data.prismicPage.data.is_title_centered ? 'center' : 'left'}
          maxW={data.prismicPage.data.is_title_narrow ? '42rem' : 'auto'}
          mx='auto'
        >
          {data.prismicPage.data.title.text}
          {data.prismicPage.data.title_suffix ?
            <Text
              as='span'
              color='brand.1'
              fontWeight='900'
            >
              &nbsp;{data.prismicPage.data.title_suffix}
            </Text>
            : null}
          <Box
            w='100px'
            h='6px'
            bg='gray.900'
            position='absolute'
            bottom='0'
            left={data.prismicPage.data.is_title_centered ? 'calc(50% - 50px)' : '0'}
          />
        </Heading>
      </Wrapper>
      <SliceEngine
        data={data.prismicPage.data.body}
        sisters={data.sisters}
      />
    </Layout>
  )
}

export default PageTpl

export const query = graphql`
query pageQuery(
  $prismicId: ID
  $parentUid: String
  $lang: String
  $uid: String
) {
    prismicPage( prismicId: { eq : $prismicId} ){
        ...HierachyPage
        prismicId
        lang
        uid
        alternate_languages{
          document{
            ... on PrismicPage{ prismicId }
            ... on PrismicProduct{ prismicId }
          }
        }
        data {
          title{
              text
          }
          short_title
          title_suffix
          is_title_narrow
          is_title_centered
          seo_title
          seo_description
          sharing_image{
            localFile{ childImageSharp{ fixed(width: 1200, height:630){ src }}}
          }
            image {
              alt
              copyright
              url
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            display_children_sticky_nav
            body {
              #... on PrismicPageBodyTwitt {
              #  primary {
              #    twit {
              #      embed_url
              #    }
              #  }
              #}
              ... on PrismicPageBodyIntagram {
                id
                primary {
                  instagram_post {
                    author_id
                    author_name
                    author_url
                    cache_age
                    description
                    embed_url
                    height
                    html
                    media_id
                    name
                    provider_name
                    provider_url
                    thumbnail_height
                    thumbnail_url
                    thumbnail_width
                    title
                    type
                    url
                    version
                    width
                  }
                }
              }
              ... on PrismicPageBodyTwoColumnsText{
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
              ... on PrismicPageBodyImageAndButtons {
                items {
                  image1{
                    localFile{ childImageSharp{ fixed(width: 300, height:300){ src }}}
                  }
                  image_title
                  button_label
                  image_target{
                    document{
                      ... on PrismicPage {
                        prismicId
                        data{ title{ text }}
                      }
                      ... on PrismicProduct {
                        prismicId
                        data{ title{ text }}
                      }
                    }
                  } 
                }
              }
              ... on PrismicPageBodyLogosList{
                primary{
                  logo_list_title
                  bg_color
                }
                items{
                  logo_item{
                    alt
                    localFile{ childImageSharp{ fixed( height: 80) { src, srcWebp }}}
                  }
                }
              }
              ... on PrismicPageBodyCriteriaList {
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
              ... on PrismicPageBodyIframe3d{
                primary{
                  iframe_url
                  is_wide
                }
              }
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
              ... on PrismicPageBodyImageAlone {
                primary{
                  wide_display
                  isolated_image_background
                  isolated_image{ alt fixed{ src } localFile{ childImageSharp{ fixed(width:1000){ src srcWebp } } } }
                }
              }
              #... on PrismicPageBodyCriteriaList {
              #}
              ... on PrismicPageBodyGallery{
                items{
                  picture{
                    dimensions { height width }
                    fixed{ src }
                    localFile{ childImageSharp{ fixed{ src srcWebp } } }
                  }
                }
              }
              ... on PrismicPageBodyTwoIllustratedButtons {
                primary {
                  anchor
                  label_1
                  label_2
                  image_1 { fixed{ src } localFile { childImageSharp { fixed { src srcWebp } } } }
                  image_2 { fixed{ src } localFile { childImageSharp { fixed { src srcWebp } } } }
                }
              }
              ... on PrismicPageBodyHorizontalButtons{
                items{
                  button_image{
                    fixed{ src }
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
                  increase_font_size
                  background_color
                  content {
                    html
                    raw
                  }
                }
              }
              ... on PrismicPageBodyVideo {
                primary{
                  video_background
                  embed {
                    author_id
                    author_name
                    author_url
                    cache_age
                    embed_url
                    html
                    name
                    provider_name
                    provider_url
                    thumbnail_height
                    thumbnail_url
                    thumbnail_width
                    title
                    type
                    version
                    url
                    width
                    height
                    media_id
                    description
                  }
                }
              }
              ... on PrismicPageBodyImageAndText {
                primary {
                  anchor
                  border_bottom
                  overlap_top_image
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
                      fixed{ src }
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
    sisters: allPrismicPage(filter:{
        data: {parent: {uid: {eq: $parentUid }}}
        lang: { eq: $lang }
      }) {
      edges {
        node {
          prismicId
          data {
            title {
              text
            }
          }
        }
      }
    }
    children:allPrismicPage(filter: {data: {parent: {uid: {eq: $uid}}}}) {
      edges {
        node {
          prismicId
          data {
            title {
              text
            }
          }
        }
      }
    }  
}`