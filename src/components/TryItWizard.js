import React from 'react'
import { Box, Button } from '@chakra-ui/core'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/core";

const TryItWizard = ( {isActive, handleClose} ) => {
    return(
        <Modal
            isOpen={ isActive }
            onClose={ () => { handleClose() } }
            size='full'
        >
        <ModalOverlay />
        <ModalContent
            w='1200px'
        >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
              <iframe width='100%' height='1000px' src="https://plugin.experify.io/overlay/reverso"></iframe>

          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default TryItWizard