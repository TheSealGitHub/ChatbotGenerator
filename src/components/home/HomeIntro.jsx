import React from 'react';

import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  
  export function HomeIntro({app_colors}) {
    return (
      <Container maxW={'100%'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={6}
          py={{ base: 10 }}>

          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Crear chatbots{' '}
            <Text as={'span'} color={app_colors['details_main_bg_color']}>
              ahora es fácil
            </Text>
          </Heading>

          <Text color={app_colors['primary_component_text_color']} maxW={'3xl'}>
            Crea tus propios chatbots personalizados fácilmente. Describe tus procesos, 
            sus posibles errores, FAQs y soluciones. Crea tu chabot en pocos clicks, 
            eligiendo qué procesos debe conocer. Gestiona, crea y destruye chatbots y 
            procesos de forma sencilla.
          </Text>

          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              bg={app_colors['details_main_bg_color']}
              _hover={{ bg: app_colors['details_hover_bg_color'] }}
              color={app_colors['primary_component_bg_color']} >
              Crear chatbot
            </Button>
            <Button rounded={'full'} px={6}
                bg={ 'blackAlpha.100' }
                _hover={{ bg: app_colors['details_hover_bg_color'] }}
                color={'black'} >
              Saber más
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
  