import React, {useEffect, useCallback} from 'react'
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
    // console.log( 'pictures', pictures )
    // const keyPressFunction = useCallback((event) => {

    //     if(event.keyCode === 39) {
    //         handlePrev()
    //     }
    //     if(event.keyCode === 37) {
    //         handlePrev()
    //       }
    //   }, []);
    
    //   useEffect(() => {
    //     document.addEventListener("keydown", keyPressFunction, false);
    
    //     return () => {
    //       document.removeEventListener("keydown", keyPressFunction, false);
    //     };
    //   }, []);
    console.log( 'pictures', pictures)
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
                        bg='gray.700'
                        p='1rem'
                    >
                        <Button
                            onClick={() => { handleClose() }}
                            variant='outline'
                            color='gray.50'
                            alignItems='center'
                            fontFamily='hind'
                            _hover={{
                                color:'gray.800',
                                bg:'gray.100'
                            }}
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
                        bg='gray.800'
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
                                        pictures[index-1].picture.localFile.childImageSharp.fixed.src
                                    }
                                />
                                <Box
                                    display={ pictures[index-1].picture.alt ? 'block' : 'none' }
                                    boxShadow='sm'
                                    position='absolute'
                                    bottom='5rem'
                                    p='.5em .75rem'
                                    bg='white'
                                    borderRadius='3px'
                                    maxW='300px'
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