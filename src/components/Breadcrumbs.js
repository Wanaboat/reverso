import React from 'react'
import Helmet from 'react-helmet'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Stack, Text } from '@chakra-ui/core'
import { FormattedMessage } from 'react-intl'
// import Wrapper from './Wrapper'

const Breadcrumbs = ({ node, lang }) => {
    const hierarchy = () => {

        console.log( 'Breadcrumbs', node )

        if (node.uid) {
            let slug = []
            let lang = 'fr'
            let url = []
            slug.push(
                {
                    "uid": node.uid,
                    "name": node.data.short_title ? node.data.short_title : node.data.title.text
                }
            )
            url.push(node.uid)
            if (node.data.parent.document) {
                slug.push(
                    {
                        "uid": node.data.parent.document.uid,
                        "name": node.data.parent.document.data.short_title ? node.data.parent.document.data.short_title : node.data.parent.document.data.title.text
                    }
                )
                url.push(node.data.parent.document.uid)
                if (node.data.parent.document.data.parent.document) {
                    slug.push(
                        // node.data.parent.document.data.parent.document.uid
                        {
                            "uid": node.data.parent.document.data.parent.document.uid,
                            "name": node.data.parent.document.data.parent.document.data.short_title ? node.data.parent.document.data.parent.document.data.short_title : node.data.parent.document.data.parent.document.data.title.text
                        }
                    )
                    url.push(node.data.parent.document.data.parent.document.uid)
                    if (node.data.parent.document.data.parent.document.data.parent.document) {
                        slug.push(
                            // node.data.parent.document.data.parent.document.data.parent.document.uid
                            {
                                "uid": node.data.parent.document.data.parent.document.data.parent.document.uid,
                                "name": node.data.parent.document.data.parent.document.data.parent.document.data.short_title ? node.data.parent.document.data.parent.document.data.parent.document.data.short_title : node.data.parent.document.data.parent.document.data.parent.document.data.title.text
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
        // console.log('breadcrumbsItems', hierarchyData)

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

    const BreadLink = (props) => {
        return (
            <>
                <Link
                    color='black'
                    to={`${lang === 'fr' ? '/fr' : ''}/${buildUrl(props.index)}`}
                    as={GatsbyLink}
                    mr='1.5rem'
                // key={`breadcrumb-item-${props}`}
                >
                    {props.children}
                </Link>
                <Box display="inline">/</Box>
            </>
        )
    }
    return (

        <Stack
            isInline
            fontSize='12px'
            spacing='0'
            shouldWrapChildren={ true }
            spacing='1.5rem'
        >
            <Link
                color='black'
                to={`${lang === 'fr' ? '/fr' : ''}/`}
                as={GatsbyLink}
                display='block'
            >
                {/* <FormattedMessage id='home' /> */}
                Sail Reverso
            </Link>
            <Box display="inline">/</Box>

            {hierarchyData.map((item, index) =>
                index + 1 !== hierarchyData.length ?
                    <BreadLink
                        index={index}
                    >
                        {item.name}
                    </BreadLink>
                    :
                    <Text
                        color='gray.500'
                    >
                        {item.name}
                    </Text>
                 )}
                        {/* // <Box
                        //     ml='1.5rem'
                        //     key={`${buildUrl(index)}`}>
                        //     {index + 1 !== hierarchyData.length ?
                        //         <Link
                        //             color='black'
                        //             to={`${lang === 'fr' ? '/fr' : ''}/${buildUrl(index)}`}
                        //             as={GatsbyLink}
                        //             key={`breadcrumb-item-${index}`}
                        //         >
                        //             {item.name}
                        //         </Link>
                        //         :
                        //         <Text>
                        //             {item.name}
                        //         </Text>
                        //     }
                        //     {index + 1 < hierarchyData.length ?
                        //         // <Flex px='1rem' alignItems='center' ><Icon name="chevron-right" /></Flex>
                        //         <Box mx='1.5rem' display="inline">/</Box>
                        //         : null }
                        // </Box>
                */}
            <Helmet>
                <script id="breadcrumbs-data" type="application/ld+json">{structuredJSON()}</script>
            </Helmet>
        </Stack>


    )
}

export default Breadcrumbs