import React from 'react'
import { Box,
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon } from '@chakra-ui/react'

const LORE_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const NAV_ITEMS = [
    {
        title: '¿En qué consiste la aplicación?',
        body: LORE_IPSUM,
        id: 1
    },
    {
        title: '¿Qué puedes hacer con ella?',
        body: LORE_IPSUM,
        id: 2
    },
    {
        title: '¿Cómo puedes definir tu Chatbot?',
        body: LORE_IPSUM,
        id: 3
    },
    {
        title: '¿Cómo puedes definir tus procesos?',
        body: LORE_IPSUM,
        id: 4
    }
];

      
export function HomeAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
        {NAV_ITEMS.map((navItem) => (
            <AccordionItem key={navItem.id}>
                <h2>
                <AccordionButton 
                    _expanded={{ bg: 'pink.400', color: 'white' }}
                    _hover={{ bg: 'pink.200' }} >
                    <Box as="span" flex='1' textAlign='left' display='flex'>
                        {navItem.title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {navItem.body}
                </AccordionPanel>
            </AccordionItem>
        ))}
    </Accordion>
  )
}
