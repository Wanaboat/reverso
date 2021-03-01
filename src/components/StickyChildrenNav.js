import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { 
    Box,
    Flex,
    Link,
    PseudoBox
} from '@chakra-ui/core'
import { linkResolver } from '../prismic-configuration'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const StickyChildrenNav = ( childrenPages ) => {
    const [stickOnScroll, setStickOnScroll] = useState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y < -81
        if (isShow !== stickOnScroll) setStickOnScroll(isShow)
      }, [stickOnScroll])

    return(
        <Box
            mt={ stickOnScroll ? '40px': '0'}
            display={{ xs:'none', lg:'block'}}
        >
            {/* <pre>
                { JSON.stringify( stickOnScroll, null, 2 )}
            </pre> */}
            <Flex
                justifyContent='center'
                bg='gray.800'
                color='white'
                position={ stickOnScroll ? 'fixed': 'initial'}
                top='0'
                w='100%'
                zIndex='modal'
            >
                { childrenPages.childrenPages.map( page => 
                    <PseudoBox
                        as={ GatsbyLink }
                        to={ linkResolver( page.node )}
                        color='white'
                        mx={3}
                        p={ 2 }
                        _hover={{
                            // 'borderBottomColor':'brand.2',
                            ":after": {
                              "width": "100%",
                              "opacity": 1
                            }
                          }}
                          _after={{
                            "content": '\" \"',
                            "display": "block",
                            "width": "80%",
                            "height": "1px",
                            "bg": "brand.2",
                            "opacity": "0",
                            "transition": "all .3s ease",
                          }}
                    >{ page.node.data.title.text }</PseudoBox>
                )}
            </Flex>
        </Box>
    )
}

export default StickyChildrenNav