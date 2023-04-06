import React from 'react'

import { 
    Box,
    Text,    
    Stack,
    Container,
    useColorModeValue } from '@chakra-ui/react';
import { FooterMenuButtons } from './FooterMenuButtons';

export function Footer({bgLightColor, bgDarkColor}) {

    return (
        <Box
            marginTop={8}
            bg={useColorModeValue(bgLightColor, bgDarkColor)}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                
                <Text>2023 Chatbot Generator. Created by @Aleparicio</Text>
                <FooterMenuButtons/>
                
            </Container>
        </Box>
    );
}
