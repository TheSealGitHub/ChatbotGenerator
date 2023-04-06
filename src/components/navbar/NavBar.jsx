import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';

  const NAV_ITEMS = [
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
  
import { FaReact } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MobileNav } from './mobilenav/MobileNav';
import { DesktopNav } from './desktopnav/DesktopNav';

export function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box marginBottom={8}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
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
              <DesktopNav items={NAV_ITEMS}/>
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
              bg={'pink.400'}
              href={'#'}
              _hover={{ bg: 'pink.200' }}>
              Sign Up
            </Button>

          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav items={NAV_ITEMS}/>
        </Collapse>
      </Box>
    );
  }
  