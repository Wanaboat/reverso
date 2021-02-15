import React from 'react'
import { FormattedMessage } from 'react-intl'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

const TryItWizard = ( {isActive, handleClose} ) => {
    return(
        <Modal
            isOpen={ isActive }
            onClose={ () => { handleClose() } }
            size='100vw'
        >
        <ModalOverlay />
        <ModalContent
            // w='1200px'
            mt={{ base:'auto',lg:'81px'}}
        >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
              <iframe width='100%' height='1000px' src="https://plugin.experify.io/overlay/reverso"></iframe>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={ ()=>{ handleClose() } }
              variant="ghost"
            >
              <FormattedMessage id='main.close' />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default TryItWizard