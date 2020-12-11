import React from 'react'
import {
    Box,
    Heading,
    SimpleGrid,
    Text
} from '@chakra-ui/core'
import Wrapper from '../Wrapper'

const CriteriaList = (props) => {
    const data = props.data
    const columns = props.data.related_criteria.document.data.body
    const isCentered = props.data.related_criteria.document.data.is_centered
    const itemPrefix = props.data.related_criteria.document.data.item_prefix
    console.log('CriteriaListColumns', data);

    return (
        <Wrapper
            bg='white'
            py='2rem'
            bg={
                data.background_color === 'mastic' ? 'brand.4'
                : data.background_color === 'gray' ? 'gray.50'
                    : data.background_color === 'white' ? 'white'
                        : 'none' }
        >
            <Heading
                as='p'
                textAlign='center'
                fontSize={{ xs: '22px', lg: '26px' }}
            >
                { props.data.criteria_list_title.text }
            </Heading>
            <SimpleGrid
                columns={{ xs: 1, md:2, lg: columns.length }}
                gap={{ xs: '1rem', lg: '2rem' }}
                my='3rem'
            >
                {columns.map((column, i) =>
                    <Box
                        whiteSpace='wrap'
                        key={`${column.id}`}
                        textAlign={ isCentered ? 'center' : 'left'}
                    >
                        <Text
                            fontWeight='bold'
                            textTransform='uppercase'
                            fontFamily='Roboto'
                            ml='1rem'
                            mb='.5rem'
                        >
                            {column.primary.column_title.text}
                        </Text>
                        {column.items.map((item,y) =>
                            <Text
                            fontSize={{ xs:'14px', lg:'15px'}}
                            key={`criteriaArg-${y}-${column.id}`}

                            >
                                {`${ itemPrefix } ${item.item}`}
                            </Text>)}
                    </Box>

                )}
            </SimpleGrid>
        </Wrapper>
    )
}

export default CriteriaList