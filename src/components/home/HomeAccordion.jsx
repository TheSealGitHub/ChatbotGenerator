import React from 'react'
import { Box,
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon } from '@chakra-ui/react'

export function HomeAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left' display='flex'>
                ¿En qué consiste la aplicación?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left' display='flex'>
                ¿Qué puedes hacer con ella?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  )
}
