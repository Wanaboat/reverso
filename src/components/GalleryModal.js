import React from 'react'
import { Button, Box, Flex, Icon } from '@chakra-ui/core'

import {
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/core";
import { FormattedMessage } from 'react-intl';

const GalleryModal = ({ pictures, index, isVisible, handleClose, handlePrev, handleNext }) => {
    console.log('pictures', pictures)
    return (
        <Modal
            size='full'
            minH='100vh'
            isOpen={isVisible}
            onClose={() => { handleClose() }}
            zIndex='tooltip'
        >
            <ModalOverlay />
            <ModalContent
                zIndex='tooltip'
                minH='100vh'
                mt='0'
                mb='0'
                p='0'
            >
                {/* <ModalHeader>Modal Title</ModalHeader> */}
                <ModalBody
                    p='0'
                >
                    <Box
                        bg='gray.50'
                        p='1rem'
                    >
                        <Button
                            onClick={() => { handleClose() }}
                            variant='outline'
                            color='gray.900'
                            alignItems='center'
                            fontFamily='hind'
                        >
                            <Icon mr='.5rem' name='arrow-back' />
                            <FormattedMessage id="back" />
                        </Button>
                    </Box>
                    <Box
                        justifyContent='center'
                        alignItems='center'
                        display='flex'
                        position='relative'
                        w='100%'
                        h='calc( 100vh - 72px )'
                    >
                        <Flex
                            position='absolute'
                            py='1rem'
                            top='0'
                            left='0'
                            h='calc( 100vh - 72px )'
                            alignItems={{ xs:'flex-end', lg:'center'}}
                            pl={{ xs:'1rem', lg:'2rem' }}

                        >
                            <Button
                                onClick={ handlePrev }
                            >
                                <FormattedMessage id='previous' />
                            </Button>
                        </Flex>
                        <Flex
                            position='absolute'
                            py='1rem'
                            top='0'
                            right='0'
                            h='calc( 100vh - 72px )'
                            alignItems={{ xs:'flex-end', lg:'center'}}
                            pr={{ xs:'1rem', lg:'2rem' }}
                        >
                            <Button
                                onClick={ handleNext }
                            >
                                <FormattedMessage id='next' />
                            </Button>
                        </Flex>
                        {pictures && index ?
                            <>
                                <Image
                                    display='block'
                                    mx='auto'
                                    maxH='calc(100vh - 72px)'
                                    src={
                                        pictures[index-1].picture.localFile.publicURL
                                    }
                                />
                                <Box
                                    display={ pictures[index-1].picture.alt ? 'block' : 'none' }
                                    boxShadow='sm'
                                    position='absolute'
                                    bottom='1rem'
                                    p='.5em .75rem'
                                    bg='white'
                                    borderRadius='3px'
                                    maxW='200px'
                                    textAlign='center'
                                >
                                    {pictures[index-1].picture.alt}
                                </Box>
                            </>
                            : null}

                    </Box>
                </ModalBody>

                {/* <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
            </ModalContent>
        </Modal>
    )
}

export default GalleryModal