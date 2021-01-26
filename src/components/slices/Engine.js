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
    ContactForm,
    Quote,
    Video,
    CriteriaList,
    Iframe,
    SisterPagesSummary,
    TwoColumnsText
} from './all'


const Engine = ({ data, sisters }) => {

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
        PrismicPageBodyLogosList: LogosList,

        PrismicPageBodyImageAlone: ImageAlone,
        PrismicPageBodyGallery: GalleryWall,

        PrismicPageBodyIllustratedSummary: IllustratedSummary,
        PrismicPageBodyContact: ContactForm,
        PrismicPageBodyQuote: Quote,

        PrismicPageBodyVideo: Video,
        PrismicPageBodyCriteriaList : CriteriaList,
        PrismicProductBodyCriteriaList : CriteriaList,

        PrismicPageBodyIframe3d: Iframe,
        PrismicPageBodySisterPagesSummary: SisterPagesSummary,

        PrismicPageBodyTwoColumnsText: TwoColumnsText


    }

    const Slices = data.map((slice, index) => {
        // console.log('sisters', sisters)
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
                    sisters={ sisters }
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