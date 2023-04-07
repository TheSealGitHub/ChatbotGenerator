import { Box,
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon } from '@chakra-ui/react'

const LORE_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const ACCORDION_ITEMS = [
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

      
export function HomeAccordion({app_colors}) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
        {ACCORDION_ITEMS.map((navItem) => (
            <AccordionItem key={navItem.id} 
                color={app_colors['primary_component_text_color']}>

                <h2>
                <AccordionButton 
                    _expanded={{ 
                            bg: app_colors['details_main_bg_color'], 
                            color: app_colors['details_main_text_color']
                        }}
                    _hover={{ 
                            bg: app_colors['details_hover_bg_color'],
                            color: app_colors['details_hover_text_color']
                        }}>
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
