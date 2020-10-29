import React from 'react'
import Helmet from 'react-helmet'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Icon, Link, Stack } from '@chakra-ui/core'

const Breadcrumbs = ({ node, lang }) => {
    const hierarchy = () => {
        if (node.uid) {
            let slug = []
            let lang = 'fr'
            let url = []
            slug.push(
                {
                    "uid": node.uid,
                    "name": node.data.title.text
                }
            )
            url.push(node.uid)
            if (node.data.parent.document) {
                slug.push(
                    {
                        "uid": node.data.parent.document.uid,
                        "name": node.data.parent.document.data.title.text
                    }
                )
                url.push(node.data.parent.document.uid)
                if (node.data.parent.document.data.parent.document) {
                    slug.push(
                        // node.data.parent.document.data.parent.document.uid
                        {
                            "uid": node.data.parent.document.data.parent.document.uid,
                            "name": node.data.parent.document.data.parent.document.data.title.text
                        }
                    )
                    url.push(node.data.parent.document.data.parent.document.uid)
                    if (node.data.parent.document.data.parent.document.data.parent.document) {
                        slug.push(
                            // node.data.parent.document.data.parent.document.data.parent.document.uid
                            {
                                "uid": node.data.parent.document.data.parent.document.data.parent.document.uid,
                                "name": node.data.parent.document.data.parent.document.data.parent.document.data.title.text
                            }
                        )
                        url.push(node.data.parent.document.data.parent.document.data.parent.document.uid)
                    }
                }
            }
            if (lang === 'fr') {
                // slug.push('fr')
            }
            // console.log( 'hierarchy - slug', slug.reverse() )
            // console.log( 'hierarchy - url', url.reverse() )
            return slug.reverse()
        }
    }

    const hierarchyData = hierarchy()
    const structuredJSON = () => {

        let breadcrumbsItems = [];
        console.log('breadcrumbsItems', hierarchyData)

        var y = 0
        for (let index = 0; index < hierarchyData.length; index++) {
            const element = hierarchyData[index];
            if (element === null) { continue; }
            y++
            breadcrumbsItems = breadcrumbsItems.concat(
                {
                    "@type": "ListItem",
                    "position": y,
                    "item":
                    {
                        "@id": `${process.env.GATSBY_BASE_URL}/${buildUrl(index)}`,
                        "name": `${element.name}`
                    }
                }
            )
        }

        let breadcrumbsList = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbsItems
        }

        return JSON.stringify(breadcrumbsList);
    }

    const buildUrl = (indexX) => {
        let customUrl = hierarchyData.map((item, indexY) => indexY <= indexX ? `${item.uid}` : null)

        return `${customUrl.filter(Boolean).join('/')}`

    }
    return (
        <>
            <Box
                bg='white'
                p='2rem'
                color='gray.900'
                borderBottom='solid 1px'
                borderColor='gray.200'
                display={{ xs:'none', md:'block' }}
            >
                <Stack isInline spacing='2rem'>
                    {hierarchyData.map((item, index) =>
                        <>
                            <Link
                                to={`${lang === 'fr' ? '/fr' : ''}/${buildUrl(index)}`}
                                as={GatsbyLink}
                                key={`breadcrumb-item-${index}`}
                            >
                                {item.name}
                            </Link>
                            { index + 1 < hierarchyData.length ? 
                                <Flex px='1rem' alignItems='center' ><Icon name="chevron-right" /></Flex>
                            : ''}
                        </>
                    )}
                </Stack>
            </Box>
            <Helmet>
                <script id="breadcrumbs-data" type="application/ld+json">{structuredJSON()}</script>
            </Helmet>
        </>
    )
}

export default Breadcrumbs