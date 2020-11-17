import React from 'react'
import {
    Box
} from '@chakra-ui/core'

import {
    SliceWysiwyg,
    NewsletterForm,
    ImageAndText,
    IllustratedButtons,
    SummaryLinks,
    Figures,
    FourImgButtons,
    LogosList,
    Accordion,
    GalleryWall,
    ImageAlone,
    IllustratedSummary,
    ContactForm
} from './all'


const Engine = ({ data }) => {

    const sliceComponents = {
        PrismicPageBodyWysiwyg: SliceWysiwyg,
        PrismicHomepageBodyWysiwyg: SliceWysiwyg,
        PrismicProductBodyWysiwyg: SliceWysiwyg,

        PrismicProductBodyAccordion: Accordion,

        PrismicPageBodyNewsletterForm: NewsletterForm,
        PrismicHomepageBodyNewsletterForm: NewsletterForm,

        PrismicPageBodyImageAndText: ImageAndText,
        PrismicHomepageBodyImageAndText: ImageAndText,

        PrismicPageBodyTwoIllustratedButtons: IllustratedButtons,
        PrismicPageBodySummaryLinks: SummaryLinks,

        PrismicPageBodyFigures: Figures,
        PrismicPageBodyHorizontalButtons: FourImgButtons,

        PrismicHomepageBodyLogosList: LogosList,

        PrismicPageBodyImageAlone: ImageAlone,
        PrismicPageBodyGallery: GalleryWall,

        PrismicPageBodyIllustratedSummary: IllustratedSummary,
        PrismicPageBodyContact: ContactForm


    }

    const Slices = data.map((slice, index) => {
        console.log('slice', slice)
        const SliceComponent = sliceComponents[slice.__typename]
        if (SliceComponent) {
            return (
                <SliceComponent
                    data={
                        slice.primary ? slice.primary
                            : slice.items ? slice.items
                                : null
                    }
                    items={slice.items ? slice.items : null}
                    //   lastPosts={ posts }
                    //   products= { products}
                    key={`${slice.__typename}-${index}`}
                />
            )
        } else {
            return (<Box>Component not found: {slice.__typename}</Box>)
        }
    }

    )
    return (
        <Box>
            { Slices}
        </Box>
    )
}

export default Engine