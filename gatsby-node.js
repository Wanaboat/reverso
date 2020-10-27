const path = require('path')
// const { langSlugConverter } = require('./src/utils/langSlugConverter')
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const pageTemplates = {
        home: path.resolve(__dirname, 'src/templates/home.js'),
        page: path.resolve(__dirname, 'src/templates/page.js'),
    }

    var langSlugConverter = (lang) => {
        if (lang === 'fr-fr') {
            return '/fr'
        }
        else {
            return ('')
        }
    }
    var langCodeConverter = (lang) => {
        if (lang === 'fr-fr') {
            return 'fr'
        }
        else {
            return ('en')
        }
    }
    const buildPageSlug = (node) => {
        let slug = []
        if (node.uid){
            slug.push( node.uid)
            if (node.data.parent.document){
                slug.push( node.data.parent.document.uid )
                if (node.data.parent.document.data.parent.document){
                    slug.push( node.data.parent.document.data.parent.document.uid )
                    if (node.data.parent.document.data.parent.document.data.parent.document){
                        slug.push( node.data.parent.document.data.parent.document.data.parent.document.uid)
                    }
                }   
            }
        } 
        return ( slug.reverse().join('/'))
    }

    // Query all Pages with their IDs and template data.
    const homepage = await graphql(`
  {
    allPrismicHomepage{
      edges{
        node{
          id
          lang
          data{
            seo_title
          }
        }
      }
    }
  }
  `)



    // Create pages for each Page in Prismic using the selected template.
    homepage.data.allPrismicHomepage.edges.forEach((page) => {
        createPage({
            path: `${ langSlugConverter(page.node.lang) ? langSlugConverter(page.node.lang) : '/' }`,
            component: pageTemplates['home'],
            context: {
                id: page.node.id,
                lang: `${langCodeConverter(page.node.lang)}`
            },
        })
    })

    // Query all Pages with their IDs and template data.
    const pages = await graphql(`
  {
    allPrismicPage {
      edges {
        node {
          prismicId
          lang
          uid
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
      }
    }
  }
  
  `)



    // Create pages for each Page in Prismic using the selected template.
    pages.data.allPrismicPage.edges.forEach((page) => {
        createPage({
            path: `${langSlugConverter(page.node.lang)}/${buildPageSlug(page.node)}`,
            component: pageTemplates['page'],
            context: {
                id: page.node.id,
                prismicId: page.node.prismicId,
                lang: `${langCodeConverter(page.node.lang)}`
            },
        })
    })
}