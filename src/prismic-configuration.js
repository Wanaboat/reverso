// In src/prismic-configuration.js


export const linkResolver = (doc) => {
    var data = require( '../paths.js')

    for (let index = 0; index < data.URIs.length; index++) {
        const element = data.URIs[index];
        if( 
            element.id === doc.id
            || element.id === doc.prismicId
          ){
            return element.path
        }
    }
    // console.log( 'path : ', paths.paths[doc.id])
    // return( paths.paths[doc.id])
    // const apiEndpoint = 'https://reverso.cdn.prismic.io/api/v2'

    // var Prismic = require('prismic-javascript');
    // if( Prismic ){
    //     Prismic.api(apiEndpoint, function(error, api) {
    //         var options = {}; // In Node.js, pass the request as 'req' to read the reference from the cookies
    //         api.query("", options, function(err, response) { // An empty query will return all the documents
    //             if (err) {
    //             console.log("Something went wrong: ", err);
    //             }
    //             console.log("Documents: ", response.documents);
    //         });
    //         });
    // }


    // Prismic.getApi("https://reverso.cdn.prismic.io/api/v2").then(
    //     function(api) { 
    //         return api.getByID('X6LJnREAACAA2_T8').then(function(document) {
    //             console.log( document )
    //             // document contains the document content
    //         });
    //     }).then(function(response) {
    //     // response is the response object, response.results holds the documents
    // });



    // URL for a category type
    if (doc.type === 'category') {
      return `/category/${doc.uid}`
    }
  
    // URL for a product type
    if (doc.type === 'product') {
      return `/product/${doc.uid}`
    }
  
    // URL for a page type
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
  
    // Backup for all other types
    return '/'
  }