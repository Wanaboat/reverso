import React from 'react'
import { FormattedMessage } from 'react-intl'
import { AspectRatioBox, Button, Box, Flex, Icon } from '@chakra-ui/core'

import {
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
            size="full"
            isOpen={ isActive }
            onClose={ () => { handleClose() } }
            size='100vw'
        >
        <ModalOverlay />
        <ModalContent
            // w='1200px'
            zIndex='tooltip'
            mt={{ xs:'0'}}
            p={ 0 }
            bgColor='green.500'

        >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody
            p={ 0 }
            bg='#FAFAFA'
          >

          <Box
                p='1rem'
                bg='white'
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