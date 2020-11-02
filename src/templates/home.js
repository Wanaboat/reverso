import React, { useEffect, useState } from 'react'
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

const HomeTpl = (props) => {


    return (
        <Layout lang={props.pageContext.lang}>
            <HomepageHero />
            <SliceBannerAndDescription />
            <SliceBannerAndDescription />
            <SliceNewsletterSubscription />
        </Layout>
    )
}

export default HomeTpl