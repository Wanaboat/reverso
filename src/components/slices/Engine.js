import React from 'react'
import {
    Box
} from '@chakra-ui/core'

import {
    SliceWysiwyg,
    NewsletterForm,
    ImageAndText,
    IllustratedButtons,
    SummaryLinks
  } from './all'
  

const Engine = ({ data }) => {

    const sliceComponents = {
        PrismicPageBodyWysiwyg: SliceWysiwyg,
        PrismicPageBodyNewsletterForm: NewsletterForm,
        PrismicPageBodyImageAndText: ImageAndText,
        PrismicPageBodyTwoIllustratedButtons: IllustratedButtons,
        PrismicPageBodySummaryLinks: SummaryLinks
    }

    const Slices = data.map( (slice, index) =>{
        console.log( 'slice', slice )
        const SliceComponent = sliceComponents[slice.__typename]
            if (SliceComponent) {
                return(    
                    <SliceComponent
                      data={
                        slice.primary ? slice.primary
                            : slice.items ? slice.items
                                :null
                    }
                    //   items={ slice.items }
                    //   lastPosts={ posts }
                    //   products= { products}
                      key={`${slice.__typename}-${index}`}
                    />
                )  
            }else{
                return(<Box>Component not found: {slice.__typename}</Box>)
            }
    }
       
    )
    return(
        <Box>
            {Slices}
        </Box>
    )
}

export default Engine