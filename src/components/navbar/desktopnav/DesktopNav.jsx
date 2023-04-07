import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent
  } from '@chakra-ui/react';
import { DesktopSubNav } from './DesktopSubNav';

export function DesktopNav({app_colors, items}) {

    const linkColor = app_colors['primary_component_text_color'];
    const linkHoverColor = 'black';
    const popoverContentBgColor = app_colors['primary_component_bg_color']
  
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
                            padding={4}
                            rounded={'xl'}
                            minW={'sm'}>
                            <Stack>
                                {navItem.children.map((child) => (
                                    <DesktopSubNav 
                                        key={child.label} 
                                        app_colors={app_colors}
                                        {...child} />
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
