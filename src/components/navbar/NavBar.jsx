import React from 'react'

import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Collapse,
    useDisclosure
  } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MobileNav } from './mobile-nav/MobileNav';
import { DesktopNav } from './desktop-nav/DesktopNav';

const MENU_ITEMS = [
    {
      label: 'Chatbots',
      children: [
        {
          label: 'Crear chatbot',
          subLabel: 'Genera tu propio chatbot customizado',
          href: '#',
        },
        {
          label: 'Consultar chatbots',
          subLabel: 'Consulta todos tus chatbots',
          href: '#',
        },
      ],
    },
    {
      label: 'Procesos',
      children: [
        {
          label: 'Crear proceso',
          subLabel: 'Genera tus propios procesos',
          href: '#',
        },
        {
          label: 'Consultar procesos',
          subLabel: 'Consulta todos tus procesos',
          href: '#',
        },
      ],
    },
    {
      label: 'Saber más',
      href: '#',
    },
    {
      label: 'OpenAI',
      href: '#',
    },
];
  

export function NavBar({app_colors}) {

  const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box marginBottom={8}>
        <Flex
          bg={app_colors['primary_component_bg_color']}
          color={app_colors['primary_component_text_color']}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={app_colors['component_border_color']}
          align={'center'}>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>

            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

            <IconButton
                icon={<FaReact size={"sm"}/>}
                variant={'ghost'}/>
  
            <Flex align={"center"} display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav items={MENU_ITEMS} app_colors={app_colors}/>
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>

            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              _hover={{ color: 'black' }}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>

            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={app_colors['details_main_bg_color']}
              href={'#'}
              _hover={{ 
                bg: app_colors['details_hover_bg_color'] 
              }}>
              Sign Up
            </Button>

          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav items={MENU_ITEMS} app_colors={app_colors}/>
        </Collapse>
      </Box>
    );
  }
  