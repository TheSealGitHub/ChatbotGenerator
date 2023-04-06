import React from 'react'

import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue
  } from '@chakra-ui/react';
import { DesktopSubNav } from './DesktopSubNav';

export function DesktopNav({items}) {

    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
        <Stack direction={'row'} spacing={4}>
            {items.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
  
                        {navItem.children && (
                            <PopoverContent
                            border={'1px'}
                            boxShadow={'xl'}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={'xl'}
                            minW={'sm'}>
                            <Stack>
                                {navItem.children.map((child) => (
                                <DesktopSubNav key={child.label} {...child} />
                                ))}
                            </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
}