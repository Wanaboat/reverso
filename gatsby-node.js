const path = require('path')
var fs = require('fs');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplates = {
        home: path.resolve(__dirname, 'src/templates/home.js'),
        page: path.resolve(__dirname, 'src/templates/page.js'),
        product: path.resolve(__dirname, 'src/templates/product.js'),
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

    var paths = []

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
        slug.push( langSlugConverter(node.lang) )
        var uri = slug.reverse().join('/')
        paths.push({
          "id":`${node.prismicId}`,
          "path": uri
        })
        return ( uri )
    }

    // Subscribers page
    createPage({
      path: `/admin/`,
      component: path.resolve(__dirname, 'src/templates/admin.js'),
      context: {
          lang: `en`
      },
    })

    // createPage({
    //   path: `/unsubscribe/`,
    //   component: path.resolve(__dirname, 'src/templates/unsubscribe.js'),
    //   context: {
    //       lang: `en`
    //   },
    // })

    createPage({
      path: `/product/`,
      component: path.resolve(__dirname, 'src/templates/product.js'),
      context: {
          lang: `en`
      },
    })

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
                lang: `${langCodeConverter(page.node.lang)}`,
                langIso: `${page.node.lang}`
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
          path: `${buildPageSlug(page.node)}`,
          component: pageTemplates['page'],
          context: {
              id: page.node.id,
              prismicId: page.node.prismicId,
              lang: `${langCodeConverter(page.node.lang)}`
          },
      })
  })


  // Query all Pages with their IDs and template data.
  const products = await graphql(`
  {
    allPrismicProduct {
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
  products.data.allPrismicProduct.edges.forEach((page) => {
      createPage({
          path: `${buildPageSlug(page.node)}`,
          component: pageTemplates['product'],
          context: {
              id: page.node.id,
              prismicId: page.node.prismicId,
              lang: `${langCodeConverter(page.node.lang)}`
          },
      })
  })

  console.log( paths )

  fs.appendFile('./paths.js', `export const paths=${JSON.stringify( paths )}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  console.log( page )
  // deletePage(page)
  // You can access the variable "house" in your page queries now
  // createPage({
  //   ...page,
  //   context: {
  //     ...page.context,
  //     house: `Gryffindor`,
  //   },
  // })
}