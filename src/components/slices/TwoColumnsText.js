import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Button,
    Grid
} from '@chakra-ui/core'
import { linkResolver } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs';
import Wrapper from '../Wrapper';

const TwoColumnsText = ({ data }) => {
    // console.log('TwoColumnsText', data)
    return (
        <Box
            py={{ xs: '2rem', lg: '4rem' }}
            bg={
                data.background_color === 'mastic' ? 'brand.4'
                    : data.background_color === 'dark' ? 'black'
                        : data.background_color === 'gray' ? 'gray.50'
                            : data.background_color === 'white' ? 'white'
                                : 'none'
            }
        >
            <Wrapper>
                <Grid
                    templateColumns={{ xs: '100%', lg: '50% 50%' }}
                    color={
                        data.background_color === 'mastic' ? 'gray.800'
                            : data.background_color === 'dark' ? 'gray.50'
                                : data.background_color === 'gray' ? 'gray.900'
                                    : data.background_color === 'white' ? 'gray.900'
                                        : 'none'
                    }
                >
                    <Box
                        className="wysiwyg"
                        color={
                            data.background_color === 'mastic' ? 'gray.800'
                                : data.background_color === 'dark' ? 'gray.50'
                                    : data.background_color === 'gray' ? 'gray.900'
                                        : data.background_color === 'white' ? 'gray.900'
                                            : 'none'
                        }
                    >
                        {
                            data.column_1 ? 
                                RichText.render(data.column_1.raw, linkResolver())
                            : null 
                        }
                    </Box>
                    <Box>
                        <Box
                            className="wysiwyg"
                            color={
                                data.background_color === 'mastic' ? 'gray.800'
                                    : data.background_color === 'dark' ? 'gray.50'
                                        : data.background_color === 'gray' ? 'gray.900'
                                            : data.background_color === 'white' ? 'gray.900'
                                                : 'none'
                            }
                        >
                        {
                            data.column_2 ? 
                                RichText.render(data.column_2.raw, linkResolver())
                            : null
                        }
                        </Box>
                        { data.button_label && data.button_target ?
                        <Button
                            as={ GatsbyLink }
                            to={ linkResolver(data.button_target.document ) }
                            border='solid 1px'
                            borderColor={ data.background_color === 'dark' ? 'gray.50' : 'black' }
                            borderRadius='3px'
                            backgroundColor='transparent'
                            mt={10}
                            _hover={{
                                bg:'gray.800',
                                color:'white'
                            }}
                        >
                            { data.button_label }
                        </Button>
                        : null}
                    </Box>
                </Grid>
            </Wrapper>
        </Box>
    )
}

export default TwoColumnsText