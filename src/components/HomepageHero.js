import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Wrapper from '../components/Wrapper'
import {
    Box,
    Heading,
    Grid,
    Flex,
    Image,
    List,
    ListItem,
    Stack,
    Text,

} from '@chakra-ui/core'
import BtnPrimary from '../components/Buttons/primary'
import Img from "gatsby-image"
import Wysiwyg from './Wysiwyg'

const HomepageHero = (props) => {
    const { data, args_list, second_args_list } = props
    
    console.log('HeroProps', data)

    // console.log( props.data.image1.localFile )
    return (
        <Box>
            <Box
                bg='white'
            >
                <Wrapper
                    pt={{ xs: '0', lg: '5rem' }}
                >
                    <Grid
                        gap={{ xs: '2rem', lg: '3rem' }}
                        templateColumns={{ xs: '100%', lg: '50% 50%' }}
                        pb={{ lg:'7rem' }}
                    >
                        <Stack
                            spacing='1.5rem'
                            order={{ xs: '2', lg: '1' }}
                        >
                            <Text
                                fontSize='36px'
                                fontWeight='900'
                                fontFamily='Roboto'
                            >
                                {data.intro_title}
                            </Text>
                            <Text
                                as='span'
                                fontSize='36px'
                                fontWeight='900'
                                fontFamily='Roboto'
                            >
                                {data.title_prefix}
                                {/* → We invented Reverso, the{' '} */}
                                <Heading
                                    as='h1'
                                    display='inline'
                                    fontSize='36px'
                                    fontWeight='900'
                                >
                                    {data.title}
                                </Heading>{' '}
                                {data.title_suffix}

                            </Text>
                            <List
                                fontSize='18px'
                            >
                                {args_list.map((list,index) =>
                                    <ListItem
                                        key={ `HeroHomeArgItem-${index}`}
                                    >{list.item}</ListItem>
                                )}
                            </List>
                            <Box>
                                <BtnPrimary
                                    as={ GatsbyLink }
                                    to='/small-sailboats/reverso-air/'
                                >
                                    MEET OUR SMALL SAILBOAT RANGE
                                </BtnPrimary>
                            </Box>
                            
                        </Stack>
                        <Box
                            order={{ xs: '1', lg: '2' }}
                        >
                            <Flex
                                alignItems='center'
                                justify='center'
                                // h='500px'
                            // bg='gray.50'
                            >
                                <picture>
                                    <source
                                        type='image/jpeg'
                                        srcSet={ props.image1.localFile.childImageSharp.fixed.srcSet }
                                    />
                                    <source
                                        type='image/webp'
                                        srcSet={ props.image1.localFile.childImageSharp.fixed.srcSetWebp }
                                    />
                                    <Image
                                        w='100%'
                                        loading='lazy'
                                        alt={ props.image1.alt }
                                        // fixed={
                                        //     props.image1.localFile.childImageSharp.fixed
                                        // }
                                        src={ props.image1.localFile.childImageSharp.fixed.src }
                                    />
                                </picture>
 
                                {/* <Image
                                    src={data.hero_image_1.url}
                                    w='500px'
                                    h='auto'
                                /> */}
                            </Flex>
                        </Box>
                    </Grid>
                </Wrapper>
                <Wrapper
                    bg='brand.4'
                >
                    <Grid
                        gap='2rem'
                        templateColumns={{ xs: '100%', lg: '50% 50%' }}
                    >
                        <Box
                            mt={{ xs:'-1rem', lg:'0'}}
                        >
                            <Box
                                as='figure'
                                w={{ xs:'calc( 100% + 2rem )', lg: '100%' }}
                                mx={{ xs:'-1rem', lg:0}}
                            >
                                
                                <Box
                                    as='picture'
                                    transform={{ lg:'translateY( -6rem )' }}
                                    display='block'
                                    margin='0'
                                    
                                >
                                    <source
                                        type='image/jpeg'
                                        srcSet={ props.image2.localFile.childImageSharp.fixed.srcSet }
                                    />
                                    <source
                                        type='image/webp'
                                        srcSet={ props.image2.localFile.childImageSharp.fixed.srcSetWebp }
                                    />
                                    <Image
                                        w='100%'
                                        loading='lazy'
                                        alt={ props.image2.alt ? props.image2.alt : '' }
                                        // fixed={
                                        //     props.image1.localFile.childImageSharp.fixed
                                        // }
                                        src={ props.image2.localFile.childImageSharp.fixed.src }
                                    />
                                    <Text
                                        mx={{ xs:'1rem', lg:'0' }}
                                        fontStyle='italic'
                                        as="figcaption">{ props.image2.alt }</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Stack
                                p={{ lg:'2rem' }}
                                spacing='2rem'
                            >
                                <Heading
                                    as='p'
                                    fontSize='24px'
                                    mb='1rem'
                                >
                                    {data.secondary_title.text}
                                </Heading>

                                <List spacing='1rem'>
                                    {second_args_list.map((list, i) =>
                                        <ListItem
                                            key={`homeHeroSecondArgs-${i}`}
                                        >
                                            <Text
                                                textTransform='uppercase'
                                                fontWeight='600'
                                            >
                                                {list.question}
                                            </Text>
                                            <Wysiwyg
                                                data={ list.answer.raw }
                                            />
                                            {/* <Text>
                                                {list.answer}
                                            </Text> */}
                                        </ListItem>
                                    )}
                                </List>
                                <Box>
                                    <BtnPrimary>
                                        One boat - multiple purposes
                                    </BtnPrimary>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Wrapper>
            </Box>
        </Box>
    )
}

export default HomepageHero