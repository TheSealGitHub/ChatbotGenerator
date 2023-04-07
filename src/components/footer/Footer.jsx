import { 
    Box,
    Text,    
    Stack,
    Container } from '@chakra-ui/react';
import { FooterMenuButtons } from './FooterMenuButtons';

export function Footer({app_colors}) {

    return (
        <Box
            marginTop={8}
            bg={app_colors['primary_component_bg_color']}
            color={app_colors['primary_component_text_color']}>

            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                
                <Text>2023 Chatbot Generator. Created by @Aleparicio</Text>
                <FooterMenuButtons app_colors={app_colors}/>
                
            </Container>
        </Box>
    );
}
