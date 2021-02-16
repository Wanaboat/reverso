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
import { FormattedMessage } from 'react-intl';

const Emersea3dPlayerModal = ({ isOpen, handleClose }) => {
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

    return (
        <Modal
            size='full'
            minH='100vh'
            isOpen={ isOpen }
            onClose={() => { handleClose() }}
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
                            // maxW="800px"
                            w='100vw'
                            h={{ xs:'100%', lg:'100%' }}
                            // ratio={4 / 3}
                            src='https://emersya.com/presets/85N0OLMVM4'
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

export default Emersea3dPlayerModal