import React from 'react'
import { Link as GatsbyLink, navigate } from 'gatsby'
import {
    Box,
    Image,
    PseudoBox,
    Flex,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import BtnPrimary from '../Buttons/primary'
import { linkResolver } from '../../prismic-configuration'
import Wrapper from '../Wrapper'

const ImageAndButtonsColumns = (props) => {
    return (
        <Wrapper>
            <SimpleGrid columns={{ xs: 0, lg: 2, xl: 4 }}>
                {
                    props.data.map(item =>
                        <PseudoBox
                            onClick={() => { navigate(linkResolver(item.image_target.document)) }}
                            p={{ xs: 5, lg: 10 }}
                            display='flex'
                            justifyContent='center'
                            flexWrap='wrap'
                            transition='background 200ms ease, transform 200ms ease'
                            cursor='pointer'
                            _hover={{
                                borderRadius: 4,
                                bg: 'gray.50',
                                transform: 'scale(1.05)',

                            }}
                        >
                            <Box
                                w='100%'
                            >
                                <Text
                                    textAlign='center'
                                    fontSize={{ xs: '16px', lg: '20px' }}
                                >
                                    {item.image_title}
                                </Text>

                            </Box>

                            <Image
                                my={{ xs: 4 }}
                                alt={item.image1.alt}
                                src={item.image1.localFile.childImageSharp.fixed.src}
                            />
                            <Flex
                                w='100%'
                                justifyContent='center'
                            >
                                <BtnPrimary
                                    marginLeft='auto'
                                    marginRight='auto'
                                    as={GatsbyLink}
                                    to={linkResolver(item.image_target.document)}
                                >
                                    {item.button_label}
                                </BtnPrimary>
                            </Flex>

                        </PseudoBox>

                    )
                }
            </SimpleGrid>
        </Wrapper>
    )
}

export default ImageAndButtonsColumns