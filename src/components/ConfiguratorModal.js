import React, {useEffect, useCallback} from 'react'
import { AspectRatioBox, Button, Box, Flex, Icon } from '@chakra-ui/core'

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
import { FormattedMessage, useIntl } from 'react-intl';

const GalleryModal = ({ handleClose }) => {
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

    const locale = useIntl().locale

    return (
        <Modal
            size='full'
            minH='100vh'
            isOpen={ true }
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
                            // color='gray.50'
                            alignItems='center'
                            _hover={{
                                // color:'gray.800',
                                // bg:'gray.100'
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
                        bg='white'
                    >
                        <Box
                            as='iframe'
                            maxW="800px"
                            w='100vw'
                            h='600px'
                            // ratio={4 / 3}
                            src={ locale === 'fr' ? 'https://form.typeform.com/to/BC6lkfG6' : 'https://form.typeform.com/to/BC6lkfG6' } 
                            // ratio={16/9}
                        />
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